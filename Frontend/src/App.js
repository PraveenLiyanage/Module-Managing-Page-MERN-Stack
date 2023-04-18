import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and componenets
import Home from './pages/ModuleHome'
import ModuleSelect from './components/ModuleSelect'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ModuleSelect />
        <div className="pages">
          <Routes>
            <Route
              path = "/"
              element = {<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
