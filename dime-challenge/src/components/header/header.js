import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)({
    minHeight: '8vh',
    color: 'black', 
    fontWeight: '600', 
    textTransform: 'capitalize', 
    fontFamily: 'open sans, sans-serif', 
    fontSize: '1rem',
    "&:hover": {
        color: '#dabeaa',
        backgroundColor: 'white',
    },
  });

const Header = () => {
    const headItems = [
        {
            title: 'Best Sellers',
            url: '',
        },
        {
            title: 'Bundles',
            url: '',
        },
        {
            title: 'Skincare',
            url: '',
        },
        {
            title: 'Beauty',
            url: '',
        },
        {
            title: 'Wellness',
            url: '',
        },
        {
            title: 'New Arrivals',
            url: '',
        },
    ]

    return (
        <Paper elevation={3}>            
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 12" className={'header-feature'}>
                        <div className={'header-feature-item'}>shop our probiotic gel cream</div>
                    </Box>
                    <Box gridColumn="span 2">
                        <div className={'site-icon'}></div>
                    </Box>

                    
                    {headItems.map(headItem => {
                        const {title} = headItem;
                        return(
                            <Box gridColumn="span 1">
                                <div>
                                    <div>
                                        <MyButton>
                                            {title}
                                        </MyButton>
                                    </div>
                                </div>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Paper>
    );
}

export default Header;