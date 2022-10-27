import { React } from 'react';
import Store from './components/Cart/Store';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Main from './components/Cart/Main';



function App() {
  
  const hi=10;

  return (
    <div>
      {hi}
      <MainHeader/>
      <main>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/products'>
          <Main/>
        </Route>
        <Route path='/contactus'>
          <ContactUs/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </main>
    </div>
  )
}

export default App;