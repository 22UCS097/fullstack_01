
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Tag from "./pages/Tag";

function App() {
    return <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/about" element={<About/>} />
         <Route element={<PrivateRoute/>} >
         <Route path="/Tag" element={<Tag/>} />
         </Route>
         
      </Routes>
    </BrowserRouter>;
}

export default App
