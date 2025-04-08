import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackComponent from './components/Fallback';
import { useSelector } from "react-redux";

const Splash = React.lazy(() => import('./screens/Splash'))
const Splash2 = React.lazy(() => import('./screens/Splash2'))
const Login = React.lazy(() => import('./screens/Login')) 
const Verification = React.lazy(() => import('./screens/Verification'))    
const Passcode = React.lazy(() => import('./screens/Passcode')) 
const ConfirmPasscode = React.lazy(() => import('./screens/ConfirmPasscode'))
const Notification = React.lazy(() => import('./screens/Notification'))      
const  Password = React.lazy(() => import('./screens/Password'))  
const  CreateWallet = React.lazy(() => import('./screens/CreateWallet'))
const  ImportWallet = React.lazy(() => import('./screens/ImportWallet'))
const  Wallet = React.lazy(() => import('./screens/Wallet'))
const  Dashboard = React.lazy(() => import('./screens/Dashboard'))
const  SendAsset = React.lazy(() => import('./screens/SendAsset'))
const  SellAsset = React.lazy(() => import('./screens/SellAsset'))
const  BuyAsset = React.lazy(() => import('./screens/BuyAsset'))
const  ReceiveAsset = React.lazy(() => import('./screens/Receive'))
const Settings = React.lazy(() => import('./screens/Receive'))
const Send = React.lazy(() => import('./screens/Send'))






function App() {
  let { userToken} = useSelector(state => state.userAuth)

  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/onboarding' element={<Splash2 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/passcode' element={<Passcode />} />
          <Route path='/confirm-passcode' element={<ConfirmPasscode />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/password' element={<Password />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/create-wallet' element={<CreateWallet />} />
          <Route path='/import-wallet' element={<ImportWallet/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/send-assets' element={< SendAsset />} />
          <Route path='/buy-assets' element={< BuyAsset />} />
          <Route path='/sell-assets' element={< SellAsset />} />
          <Route path='/receive' element={< ReceiveAsset />} />
          <Route path='/settings' element={< Settings />} />
          <Route path='/send' element={< Send />} />
          
          {
            /* homescreen */
          }
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
