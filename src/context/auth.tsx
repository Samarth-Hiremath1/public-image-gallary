import { FC, createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/config';

export interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: React.ReactElement;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};