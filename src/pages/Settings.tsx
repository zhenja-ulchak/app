
import { Container, Typography } from '@mui/material';
import LanguageSwitcher from '../translate/ButtonChengeLang';
import Debug from '../components/DebugPanel';
import Switch from '@mui/material/Switch';
import useDebugStore from '../store/DebugStore'; // Імпортуємо сховище
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';


const AccordionStyle = {
    width: '100%',
}

const SettingPage = () => {
    const { t } = useTranslation();
    // @ts-ignore
    const isOpen = useDebugStore((state) => state.isOpen); // Отримуємо стан
    // @ts-ignore
    const toggleOpen = useDebugStore((state) => state.toggleOpen); // Отримуємо функцію для зміни стану
    // @ts-ignore


    return (
        <>
            <Button
                component={Link}
                to="/home"
                sx={{ color: '#000000' }}
            >
                <FaArrowLeft size={30} />
            </Button>
            <Container>
                <Typography variant="h2" noWrap component="p" sx={{ marginTop: '100px', marginLeft: '30%' }}>
                {t('setting.Settings')}
                </Typography>
                <Accordion defaultExpanded sx={{ ...AccordionStyle }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                         {t('setting.changeL')}
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ float: 'right' }}>
                        <LanguageSwitcher  />

                        </div>
                        
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ ...AccordionStyle }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                             {t('setting.DebugP')}
                    </AccordionSummary>
                    <AccordionDetails>

                        <Switch
                            checked={isOpen}
                            onChange={toggleOpen}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </AccordionDetails>
                </Accordion>
              
            </Container>
            <Debug open={isOpen} />
        </>
    );
};

export default SettingPage;
