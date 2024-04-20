import { ReactNode, createContext, useEffect, useState } from 'react';
import { LANGUAGES } from '../../shared/types/i18n';
import { i18nKeys } from './i18nKeys';

export type LanguageContextParams = {
  language: LANGUAGES;
  lacales: (typeof i18nKeys)[keyof typeof i18nKeys];
  setLanguage: (val: LANGUAGES) => void;
};

export const LanguageContext = createContext<LanguageContextParams | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.RU);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, lacales: i18nKeys[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

const ThemeContext = createContext<{ theme: 'light' | 'black' }>({ theme: 'light' });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'black'>('light');

  useEffect(() => {document.body.dataset.theme = theme}, [theme])

  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

