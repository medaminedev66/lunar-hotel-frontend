import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
