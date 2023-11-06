import Home from './components/routes/home/home.component';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.components';


const Shop = () => {
  return <h1>I am shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Navigation/>} >
        <Route index element = {<Home/> } />
        <Route path ='shop'  element = {<Shop/> } />
        <Route path ='sign-In' element = {<SignIn/> } />
      </Route>
    </Routes>
  
  );
};

export default App;
