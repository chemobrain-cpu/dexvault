import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackComponent from './components/Fallback';
import { useSelector } from "react-redux";
const Splash = React.lazy(() => import('./screens/Splash'))
const Splash2 = React.lazy(() => import('./screens/Splash2'))
const Login = React.lazy(() => import('./screens/Login'))         

function App() {
  let { userToken} = useSelector(state => state.userAuth)

  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/onboarding' element={<Splash2 />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
