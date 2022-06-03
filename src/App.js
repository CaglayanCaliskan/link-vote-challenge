import './App.scss';
import {Routes, Route} from 'react-router-dom';
import LinkList from './components/LinkList';
import LinkForm from './components/LinkForm';
import {LinkProvider} from './context/LinkContext';
//components
import Header from './components/Header';
function App() {
  return (
    <LinkProvider>
      <Header />
      <Routes>
        <Route path='/' element={<LinkList />}></Route>
        <Route path='/form' element={<LinkForm />}></Route>
      </Routes>
    </LinkProvider>
  );
}

export default App;
