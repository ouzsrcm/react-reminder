import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import CommonRoutes from "./Common/Routes";

import Footer from './components/Footer';
import Header from './components/Header';

function App() {  
  return (
    <>
      <BrowserRouter>
        <Header />
          <Content />
        <Footer />
      </BrowserRouter>
    </>
  );
}

function Content(){
  var routes = CommonRoutes.map((route, index) => 
      { return <Route path={route.path} element={route.element} key={index} /> });
  return(
    <>
      <main className="container containerHeight ">
        <div className="containerWrapper p-2">
          <div className='row'>
            <div className='col-sm-12'>
              <Routes>
                {routes}
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;