import React, { createContext, useContext, useState } from 'react';

type EmotionContextType = {
    selectedEmotion: string | undefined;
    setSelectedEmotion: React.Dispatch<React.SetStateAction<string | undefined>>;
  };
  
  const EmotionContext = createContext<EmotionContextType | undefined>(undefined);
  
  export const EmotionProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedEmotion, setSelectedEmotion] = useState<string | undefined>(undefined);
  
    return (
      <EmotionContext.Provider value={{ selectedEmotion, setSelectedEmotion }}>
        {children}
      </EmotionContext.Provider>
    );
  };
  
  export const useEmotion = () => {
    const context = useContext(EmotionContext);
    if (!context) {
      throw new Error('useEmotion must be used within an EmotionProvider');
    }
    return context;
  };