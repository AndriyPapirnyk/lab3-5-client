import { createContext, useContext, useState, type ReactNode } from 'react';

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

interface ProviderProps {
    children: ReactNode;
}

export const SearchProvider = ({ children }: ProviderProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
