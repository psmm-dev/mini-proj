import React from 'react';
import './App.css'
import LoginContainer from './components/LoginContainer/LoginContainer';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {

return(
  <Provider store={store}>
    <LoginContainer />
    <MainPage />
  </Provider>
)
  
}

export default App;