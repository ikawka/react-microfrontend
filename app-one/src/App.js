import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import './App.css';

const products = [
  {
    id: '001',
    name: 'Juicy Back Ribs',
    price: '$15',
    image: 'http://localhost:3000/images/product-001.jpg',
  },
  {
    id: '002',
    name: 'Big Burger',
    price: '$10',
    image: 'http://localhost:3000/images/product-002.jpg',
  },
  {
    id: '003',
    name: 'Ultimate Pizza',
    price: '$20',
    image: 'http://localhost:3000/images/product-003.jpg',
  },
  {
    id: '004',
    name: 'Burger Combo',
    price: '$15',
    image: 'http://localhost:3000/images/product-004.jpg',
  },
  {
    id: '005',
    name: 'Potato Fries',
    price: '$5',
    image: 'http://localhost:3000/images/product-005.jpg',
  },
];

const OneContainer = styled.div`
  padding: 8px;
`;

const OneNavigation = styled.div`
  padding: 8px;
  background-color: #e1e1e1;
  a {
    text-decoration: none;
    padding: 4px;
    color: #333;
  }
`;

const Home = () => {
  return (
    <OneContainer>
      <h1>Browse Products</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
        }}
      >
        {products.map((product) => (
          <a href={`/two/product/${product.id}`} key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <img src={product.image} alt={product.name} width={300} />
          </a>
        ))}
      </div>
    </OneContainer>
  );
};

const SomeFeature = () => {
  return <OneContainer>This some feature in App One</OneContainer>;
};

function App() {
  return (
    <BrowserRouter>
      <>
        <OneNavigation>
          <Link to="/one/">Home</Link>
          <Link to="/one/some-feature/">Others</Link>
        </OneNavigation>
        <Switch>
          <Route exact path="/one/" component={Home} />
          <Route exact path="/one/some-feature/" component={SomeFeature} />
          <Route exact path="*">
            <Redirect to="/one/" />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
