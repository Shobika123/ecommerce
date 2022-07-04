import React, {useState} from 'react';
import './App.css';

const PAGE_PRODUCT = 'productsArr';
const PAGE_CART = 'cart';
 

function App() {
  const [cart,setCart]=useState([]);
  const [page,setPage]=useState(PAGE_PRODUCT);

  const [productsArr] = useState([
    {
      
    name: 'colors',
    price: 'RS.100',
    image: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
    },
    {
      name: 'black and white colors',
      price: 'RS.50',
      image: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'

    },
    {
      name: 'yellow and black colors',
      price: 'RS.70',
      image: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'


    },
    {
      name: 'blue colors',
      price: 'RS.70',
      image: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'


    },

  ]);

const addToCart= (props) => {
  setCart([...cart, props]);
};

const navigateTo = (nextPage) =>{
  setPage(nextPage);
};

const renderProducts = () => (
  <>
  <h1>musics</h1>
      <div className="productsArr">

  {
  productsArr.map((props,idx)=>(
      <div className="props" key={idx}>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <img src={props.image} alt={props.name} />
        <button onClick={() => addToCart(props)}>add To Cart</button>
        </div>
        
    ))
  }
  </div>

    </>

);
const renderCart = () =>(
  <>
  <h1>Cart</h1>
      <div className="productsArr">

  {
  cart.map((props,idx)=>(
      <div className="props" key={idx}>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <img src={props.image} alt={props.name} />
     {/* <button onClick={() => addToCart(props)}>add To Cart</button> */}
        </div> 
        
    ))
  }
  </div>

    </>


);

  return(
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>CART ({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCT)}>Close</button>
      </header>
      {page === PAGE_PRODUCT && renderProducts()}
      {page === PAGE_CART && renderCart()}
      
    </div>
  );
}

export default App;
