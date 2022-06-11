import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Applications from './pages/Applications';

import Reminders from './pages/Reminders';

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
                <Reminders />
              </div>
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
}

export default App;
