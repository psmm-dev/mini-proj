import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

return(
  <Provider store={store}>
    <LoginForm />
  </Provider>
)
  
}

export default App;