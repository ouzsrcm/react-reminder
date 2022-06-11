import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Applications from './pages/Applications';

import Home from './pages/Home';

function App() {
  
  return (
    <>
      <Header />
        <main className="container containerHeight">
          <div className="containerWrapper p-2">
            <div className='row'>
              <div className='col-sm-12'>
                <Applications />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <Home />
              </div>
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
}

export default App;
