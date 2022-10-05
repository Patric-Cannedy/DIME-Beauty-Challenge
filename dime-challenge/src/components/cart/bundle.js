import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

const MyButton = styled(Button)({
    color: 'white',
    width: '500px',
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

const Bundle = ({cart, setCart}) => {
    const [total, setCartPrice] = useState(0);
    const [savings, setSavings] = useState(100);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        const cartLogic = (total) => {
            let cartTotal = 0;
            
            for(let item of cart){                
                let itemPrice = Math.round(item.node.priceRange.maxVariantPrice.amount);            
                setCartPrice(cartTotal+=itemPrice);
                setShowCart(true)
                if(cartTotal>=100){
                    setCartPrice(Math.round(cartTotal*.90));            
                }
            }
        }    
        cartLogic();
    }, [cart]);

    useEffect(() => {
        const savingsLogic = (savings) => {    
            let deal = 100;
            for(let item of cart){
                let itemPrice = Math.round(item.node.priceRange.maxVariantPrice.amount);            
                setSavings(deal-=itemPrice);
                if(deal<0){
                    setSavings(0)
                }
            }
        }
    savingsLogic();
    }, [cart]);
    
    return (
        <Box sx={{ width: 1 }}>
            <div className={'cart-cont'} style={{ display: showCart ? 'block' : 'none' }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <div className={'cart'}>
                        <Box className={'cart-header'}>
                            <h2>My Bag </h2>
                                <div className={'close-icon'}>
                                    <CloseIcon onClick = {(e)=>setShowCart(false)}/>
                                </div>
                           
                        </Box >
                    
                        <Box gridColumn="span 12" className={'savings'}>
                            Add ${savings} to save 10%
                        </Box>  
                    
                        <Box display="grid" gridTemplateColumns="repeat(1, 1fr)" gap={1} className={'cart-items'}>
                            {cart.map(cartItem => {
                                const title = cartItem.node.title;
                                const img = cartItem.node.featuredImage.url;
                                const price = Math.round(cartItem.node.priceRange.maxVariantPrice.amount);                            
                                return(
                                <>
                                <Box gridColumn="span 1" className={'cart-item-container'}>
                                    <div className={'cart-item'} >
                                        <p className={'img-wrapper'}>
                                            <p className='cart-img' style={{backgroundImage: `url(${img})`}}></p>
                                        </p>
                                        <div>
                                            <p className={'cart-title'}>{title}</p>                                            
                                            <div className={'cart-price'}>${price} 
                                                <div className={'remove-item'}>
                                                    <RemoveIcon onClick={(e) => setCart(prev => prev.filter(cart => cart !== cartItem))}/>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </Box>
                                </>
                                );
                            })}
                        </Box>
                    
                        <p className={'total'}>
                            <span className={'sub'}>Subtotal:</span> 
                            <b>
                                <span className={'amount'}>${total}.00</span>
                            </b>
                        </p>
                    
                        <div className={'checkout'}>
                            <MyButton className={'check-btn'}>Checkout</MyButton>
                        </div>
                    </div>
                </Box>
            </div>
        </Box>
    )
}

export default Bundle