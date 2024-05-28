import React from 'react';
import Home from './components/Home' 
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes , Route} from 'react-router-dom';

const App = () => {
  return (
<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/home'element={<Home/>}/>
  <Route path='/signup'element={<SignUp/>}/>
  <Route path='/signin'element={<SignIn/>}/>
</Routes>
  )
}

export default App;
