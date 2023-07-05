import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";

import store from './store';
import Main from "./components/layout/Main";
import Translator from "./components/pages/translator/Translator";

import TranslationPage from "./components/pages/translator/page/TranslationPage";

import Home from "./components/pages/home/Home";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Main>
            <Routes>


              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/translator" element={<Translator />} />
              <Route path="/translator-page" element={<TranslationPage />} />

            </Routes>
          </Main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
