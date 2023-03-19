import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";

import store from './store';
import Main from "./components/layout/Main";
import Doctor from "./components/pages/doctor/Doctor";
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
              <Route path="/doctor" element={<Doctor />} />


            </Routes>
          </Main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
