import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import './App.css';

const products = [
  {
    id: '001',
    name: 'Juicy Back Ribs',
    price: '$15',
    image: 'http://localhost:3000/images/product-001.jpg',
    description:
      'Bacon ipsum dolor amet venison filet mignon kielbasa pig shankle frankfurter doner. Capicola strip steak rump pastrami pork pork loin spare ribs meatball tongue leberkas alcatra flank pork chop. Bresaola ham boudin tenderloin turducken kielbasa tail pork loin ground round pancetta prosciutto fatback tri-tip. Swine drumstick bacon pork. Porchetta sirloin kevin bacon jowl. Cupim meatball brisket bresaola, corned beef frankfurter jowl chuck andouille. Chislic bresaola boudin meatloaf, picanha bacon tri-tip flank pig leberkas shank.',
  },
  {
    id: '002',
    name: 'Big Burger',
    price: '$10',
    image: 'http://localhost:3000/images/product-002.jpg',
    description:
      'Porchetta ground round leberkas andouille ham pastrami kevin flank. Chislic andouille sirloin leberkas kevin, ham alcatra beef brisket ribeye venison capicola pancetta landjaeger. Doner t-bone kevin capicola, fatback short ribs tenderloin chuck pork belly ribeye venison landjaeger bresaola meatball pork. Meatball flank turkey, ham hock pig picanha salami pork chop frankfurter.',
  },
  {
    id: '003',
    name: 'Ultimate Pizza',
    price: '$20',
    image: 'http://localhost:3000/images/product-003.jpg',
    description:
      'Tail porchetta pork belly tri-tip salami, prosciutto corned beef landjaeger leberkas cow ham jerky alcatra ham hock. Buffalo venison pork loin rump, tail pork bresaola meatball kielbasa. Buffalo tongue bresaola, bacon turkey strip steak kielbasa fatback filet mignon andouille. Kielbasa pig venison, salami bacon tail burgdoggen chislic beef tri-tip ball tip. Porchetta biltong venison picanha brisket jowl short ribs. Tongue sirloin drumstick andouille turducken landjaeger ground round t-bone rump corned beef picanha doner meatloaf chicken.',
  },
  {
    id: '004',
    name: 'Burger Combo',
    price: '$15',
    image: 'http://localhost:3000/images/product-004.jpg',
    description:
      'Short loin turducken short ribs brisket pork loin shoulder turkey kielbasa jowl meatloaf. Porchetta meatball short loin rump cupim andouille cow capicola pork loin beef frankfurter pork belly brisket turducken t-bone. Tongue tail burgdoggen brisket buffalo swine. Short loin alcatra turkey tri-tip flank beef chuck boudin ribeye. Short loin burgdoggen t-bone rump pork loin, meatloaf fatback pork pork belly short ribs bacon turkey sausage salami biltong.',
  },
  {
    id: '005',
    name: 'Potato Fries',
    price: '$5',
    image: 'http://localhost:3000/images/product-005.jpg',
    description:
      'Porchetta drumstick pig, cow beef shank chuck corned beef tri-tip leberkas pork. Shankle burgdoggen salami pork belly andouille cupim doner ground round. Hamburger rump alcatra cupim ball tip andouille prosciutto pig frankfurter tail. Fatback brisket buffalo, corned beef boudin salami pork ball tip picanha. Rump tongue swine frankfurter prosciutto chicken leberkas andouille flank bresaola jowl. Chuck pork hamburger meatloaf chislic jowl alcatra.',
  },
];

const TwoContainer = styled.div`
  padding: 8px;
`;

const TwoNavigation = styled.div`
  padding: 10px;
  background-color: #fffccc;
  a {
    text-decoration: none;
    padding: 4px;
    color: #000;
  }
`;

const Layout = styled.div``;

const OtherPage = () => {
  return <TwoContainer>This is Another page in App two</TwoContainer>;
};

const NotFound = () => {
  return (
    <TwoContainer>
      The Page your are looking for is gone. Click <a href="/one/">here</a> to
      go back to the home page.
    </TwoContainer>
  );
};

const Product = () => {
  const params = useParams();
  const product = products.filter((p) => p.id === params.id)[0];
  return (
    <TwoContainer
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
      }}
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: '100%' }}
        />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </TwoContainer>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <TwoNavigation>
          <a href="/one/">Home</a>
          <Link to="/two/another-page">Another Page</Link>
        </TwoNavigation>
        <Switch>
          <Route exact path="/two/product/:id" component={Product} />
          <Route exact path="/two/another-page" component={OtherPage} />
          <Route exact path="/two" component={NotFound} />
          <Route exact path="*">
            <Redirect to="/two" />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
