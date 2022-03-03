import {useState, useEffect} from 'react';
import './styles/main.css';
import './styles/ShutUpBootstrap.css';
import Nav from './components/Nav';
import AllCartItems from './components/AllCartItems';
import PriceList from './components/PriceList';
import TagBox from './components/TagBox';
// introjs imports
import { Steps, Hints } from 'intro.js-react';
import "intro.js/introjs.css";

function App() {

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(true);
  }, []);

  const steps = [
    {
      element: '.continue-shopping-btn',
      intro: 'Continue Shopping',
      position: 'top',
    },
    {
      element: '.place-order',
      intro: 'Place Order',
      position: 'top',
    },
    {
      element: '.cen-btn',
      intro: 'Have a Promo Code?',
      position: 'bottom',
    },
  ];

  return (
    <>
    <Steps
      enabled={enabled}
      steps={steps}
      initialStep={0}
    />
      <Nav />
      <div className='status'>
        <span className='active'>Cart</span>
        <hr />
        <span>Delivery</span>
        <hr />
        <span>Payment</span>
      </div>
      <div className='container '>
        <div className='d-flex flex-row justify-content-between'>
          <AllCartItems />
          <PriceList />
        </div>
        <TagBox />
      </div>
    </>
  );
}

export default App;
