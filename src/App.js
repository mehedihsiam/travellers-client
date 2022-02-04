import './App.css';
import ContextProvider from './contexts/ContextProvider/ContextProvider';
import Home from './Pages/Home/Home';

function App() {
  return (
    <ContextProvider>
      <Home/>
    </ContextProvider>
  );
}

export default App;
