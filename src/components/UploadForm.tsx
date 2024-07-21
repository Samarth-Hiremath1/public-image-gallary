import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
    }

    setSelectedFile(null);
  };

  return (
    <div className="text-center mt-10">
      <form onSubmit={handleSubmit} className="flex items-center flex-col gap-8">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        <button
          type="submit"
          className={`btn gap-3 ${Boolean(progress) ? 'loading' : ''}`}
          disabled={!selectedFile}>Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;