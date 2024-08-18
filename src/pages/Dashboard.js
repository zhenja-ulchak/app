import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import { Star } from '@mui/icons-material';
const DashApp = () => {
  const { t } = useTranslation();



  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <Typography variant="h2" noWrap component="p" sx={{ marginTop: '200px', marginLeft: '30%' }}>
          {t('welcome')}

        </Typography>

      </motion.div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh'
      }}>
        <motion.div
          className="box"
          animate={{

            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            backgroundColor: ["#000"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={{
            width: 100,
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 24, // Розмір іконки
            color: '#fff' // Колір іконки
          }}
        >

          <Star sx={{ width: 100, height: 100 }} />
        </motion.div>
      </div>
      <Typography variant="h5" noWrap component="p" sx={{ marginTop: '100px', marginLeft: '10%' }}>
        Welcome to our cutting-edge web application built with React and Material-UI. Our project leverages the power of React for a dynamic user experience and MUI for a modern, sleek design that aligns with Material Design principles.
      </Typography>
    </>

  )
}

export default DashApp