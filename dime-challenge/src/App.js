import './App.css';
import Header from './components/header/header';
import {useState, useEffect} from 'react';
import DisplayPage from './components/shop/displayPage';
import React from 'react';

function App() {  
  const [item1, setProduct1] = useState({});
  const [item2, setProduct2] = useState({});
  const [item3, setProduct3] = useState({});
  const [item4, setProduct4] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const query = `{
    products(first: 4) {
      edges {
        node {
          id
          vendor
          title
          featuredImage {
            url
          }  
          priceRange {
            maxVariantPrice {
              amount
            }    
          } 
        }
      }
    }
  }`;
  
  useEffect(() => {
  const request = async () => {
        try {
          const response = await fetch(
            "https://dime-beauty-demo.myshopify.com/api/2022-07/graphql",
            {
              method: "POST",
              headers: {
                "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_API_KEY,
                "Content-Type": "application/graphql",
                Accept: "application/json"
              },
              body: query
            }
          )
          const json = await response.json();
          setProduct1(json.data.products.edges[0]);
          setProduct2(json.data.products.edges[1]);
          setProduct3(json.data.products.edges[2]);
          setProduct4(json.data.products.edges[3]);
          setHasLoaded(true); 
          
        } catch (e) {
          console.log(e);
          
        }
        
      };
      request();
    }, [hasLoaded]);

return (
  <div>
  {
    hasLoaded ? (
      <>
        <Header />
        <DisplayPage item1={item1} item2={item2} item3={item3} item4={item4}/>
      </> 
    ) : (
       <div> Loading ... </div>
    )
  }
  </div>
)
  }

export default App;
