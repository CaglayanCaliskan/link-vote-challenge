import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LinkList from './components/LinkList';
import LinkForm from './components/LinkForm';
//components
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LinkList />}></Route>
        <Route path='/form' element={<LinkForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
