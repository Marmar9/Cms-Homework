import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/app.context";
import { SliderContextProvider } from "./context/slider.context";
import './index.scss';
import exports from './views/index';
import UnsavedChangesWrapper from "./UnsavedChangesWrapper";
const { Home, Admin, Test } = exports;

const App = () => {
  
  return (
    <AppContextProvider  >
      <SliderContextProvider>
      <div className="App">
        <UnsavedChangesWrapper>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="admin" element={<Admin />} />
              <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
        </UnsavedChangesWrapper>
      </div>
      </SliderContextProvider>
    </AppContextProvider>
  );
}

export default App;
