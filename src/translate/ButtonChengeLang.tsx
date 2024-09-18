import React from 'react';
import { useTranslation } from 'react-i18next';
import Botton from '@mui/material/Button'
import Typography from '@mui/material/Typography';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };
  const styleButton = {
    color: "#ffffff",
    background: '#000000',
    fontSize: '14px',
    padding: '5px 10px'
  }

  return (
    <div>
      <Botton onClick={() => handleLanguageChange('en')}>
        <Typography sx={{...styleButton}}>
        English
        </Typography>
        </Botton>
      <Botton onClick={() => handleLanguageChange('ua')}>
        <Typography sx={{...styleButton}}>
        Українська
        </Typography>
        </Botton>
    </div>
  );
};

export default LanguageSwitcher;
