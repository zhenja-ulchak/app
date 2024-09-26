
import React from 'react';

import { useRouter } from 'next/router';
// @ts-ignore
import { Logout as apiLogout } from '../api/ApiProvaider'
import { Button, } from '@mui/material';
import { useTranslation } from 'next-i18next';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    apiLogout()
    router.push('/');
  };
  const { t } = useTranslation('common');
  return (
    <Button variant="outlined" onClick={handleLogout}>
      {t('logout.Logout')}
    </Button>
  );
};

export default Logout;
