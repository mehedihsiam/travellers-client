import { Box, List, ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import './UserModal.css';

const UserModal = () => {
    
    return (
        <div className='modal'>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    
                    <ListItemButton>
                        <ListItem>1</ListItem>
                    </ListItemButton>
                    <ListItemButton>
                            <ListItem>2</ListItem>
                    </ListItemButton>
                </List>
                
            </Box>
        </div>
    );
};

export default UserModal;