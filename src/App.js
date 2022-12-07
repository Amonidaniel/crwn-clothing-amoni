import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './routes/navigation/navigation-bar.component'
import SignIn from './routes/sign-in/sign-in.component';



const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
     <Route path='/' element={<NavigationBar />}> 
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes> 
  );
};

export default App;


