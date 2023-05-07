import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and componenets
import Home from './pages/ModuleHomeUser'
import ModuleSelect from './components/ModuleSelectUser'

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
