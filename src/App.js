import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import CreateReminder from "./pages/CreateReminder";
import Reminders from "./pages/Reminders";
import Applications from "./pages/Applications";

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
                <BrowserRouter>
                  <Routes>
                    <Route path="/" exact component={Applications} />
                    <Route path="/reminders" exact component={Reminders} />
                    <Route path="/create" exact component={CreateReminder} />
                    <Route path="*" exact component={Applications} />
                  </Routes>
                </BrowserRouter>
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
}

export default App;