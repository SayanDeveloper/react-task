import './styles/main.css';
import Nav from './components/Nav';
import AllCartItems from './components/AllCartItems';
import PriceList from './components/PriceList';

function App() {
  return (
    <>
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
      </div>
    </>
  );
}

export default App;
