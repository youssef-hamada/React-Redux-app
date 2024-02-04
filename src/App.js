// import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

import { BrowserRouter as Router ,Switch,Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route path='/' exact Component={ProductListing} />
          <Route path='/product/:productId' exact Component={ProductDetails} />
          <Route >404 Not Found</Route>
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
