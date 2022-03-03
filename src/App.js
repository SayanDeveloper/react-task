import './styles/main.css';
import './styles/ShutUpBootstrap.css';
import Nav from './components/Nav';
import AllCartItems from './components/AllCartItems';
import PriceList from './components/PriceList';
import TagBox from './components/TagBox';

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
        <TagBox />
      </div>
    </>
  );
}

export default App;
