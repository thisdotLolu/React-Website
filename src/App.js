import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Faq2 from './routes/faq2';
import Pricing2 from './routes/Pricing';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pricing' element={<Pricing2/>}></Route>
      <Route path='/faq' element={<Faq2/>}></Route>
    </Routes>
    </>
  );
}

export default App;
