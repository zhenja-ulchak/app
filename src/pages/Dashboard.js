import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const DashApp = ()=>{
    const { t } = useTranslation();

    
return (
    <Typography variant="h2" noWrap component="p" sx={{marginTop: '200px', marginLeft:'30%'}}>
       {t('welcome')}
    </Typography>

)
}

export default DashApp