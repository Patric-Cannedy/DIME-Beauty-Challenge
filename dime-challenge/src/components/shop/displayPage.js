import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Bundle from '../cart/bundle';

const MyButton = styled(Button)({
    color: 'white',
    width: '306px',
    backgroundColor: 'black',
    textTransform: 'capitalize',
    textAlign: 'center',
    padding: 8,
    borderRadius: 1,
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontWeight: '600',
    borderColor: 'black',
    "&:hover": {
        borderColor: 'black',
        color: 'black',
        backgroundColor: '#dabeaa',
    },
  });

const DisplayPage = ({item1,item2,item3,item4}) => { 
    const [cart, setCart] = useState([]);    
    let featuredItems = []
    featuredItems.push(item1,item2,item3,item4);

    return (
        <div className={'main-content'}>
            <Bundle cart={cart} setCart={setCart}/>
            <Box className={'product-group'} display='grid'>
                <Box className={'body-headers'} gridColumn='span 12'>
                    <span className={'product-group-title'}>Best Sellers</span>{/* change to variable */}
                </Box>

                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3} className={'display-items'}>
                        {featuredItems.map(featuredItem => {
                            const title = featuredItem.node.title;
                            const img = featuredItem.node.featuredImage.url;
                            const price = Math.round(featuredItem.node.priceRange.maxVariantPrice.amount);                            
                            return(
                            <>
                            <Box gridColumn="span 1">
                                <div className={'product-card'} >
                                    <div className={'img-wrapper'}>
                                        <p className='product-img' style={{backgroundImage: `url(${img})`}}></p>
                                    </div>
                                    <h3 className={'product-title'}>{title}</h3>
                                    <p className={'product-price'}>${price}</p>
                                    <MyButton                                        
                                        className={'add-to-cart'}  
                                        onClick={(e) => setCart(current => [...current, featuredItem])}>
                                            Add to Bundle
                                    </MyButton>
                                </div>
                            </Box>
                            </>
                            );
                        })}
                    </Box>
                </Box>                
            </Box>            
        </div>
    )
}

export default DisplayPage