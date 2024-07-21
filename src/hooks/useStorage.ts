import { useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from 'firebase/firestore';
import { useAuth } from './useAuth';

const useStorage = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null);
    const {user } = useAuth();

    const startUpload = (file: File) => {
        const fieldId = uuidv4();
        const fileFormat = file.type.split('/')[1];

        const storageRef = ref(storage, `images/${fieldId}.${fileFormat}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress);
            },
            (error) => {
                setError(error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setProgress(progress);

                // store data into firestore db
                await addDoc(collection(db, "images"), {
                    imageURL: downloadURL,
                    createAt: new Date(),
                    userEmail: user?.email,
                });


            }
        );
    };

    return { progress, error, startUpload };
};

export default useStorage;