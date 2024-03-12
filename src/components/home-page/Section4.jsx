import styles from "./Section4.module.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Sector4 = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`${styles.mainContainer} ${styles.officeCardContainer}`} style={{ textAlign: "center" }}>
            <h1 style={{ marginLeft: "15px", color: "white", fontSize: "47px", textAlign: "center" }}>Offices</h1>
            <div className={styles.officeCardContainer} style={{ textAlign: "center" }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ color: 'white' }}>
                                    <Tab label="New Delhi" value="1" sx={{ color: 'white' }} />
                                    <Tab label="Patna" value="2" sx={{ color: 'white' }} />
                                </TabList>
                            </Box>
                        </div>
                        <TabPanel value="1">
                            <iframe title="1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.227676432547!2d77.38467407553225!3d28.62293768451627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce563cc62caed%3A0xd95671f5313ccab0!2sKhera%20Enterprises!5e0!3m2!1sen!2sin!4v1709826332321!5m2!1sen!2sin" style={{ border: "0", filter: "invert(90%)" }}
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.maps}></iframe>
                        </TabPanel>
                        <TabPanel value="2">
                            <iframe title="2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.475631571619!2d85.15001965490433!3d25.592654941865458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58ae9d9b6d25%3A0xaf13607163d27f80!2sKankarbagh%2C%20Kumhrar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1709826517137!5m2!1sen!2sin" style={{ border: "0", filter: "invert(90%)" }}
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.maps}></iframe>
                        </TabPanel>

                    </TabContext>
                </Box>
            </div>
        </div>
    );
}

export default Sector4;
