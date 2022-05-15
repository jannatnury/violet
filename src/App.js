import {Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthRoute from './components/AuthRoute/AuthRoute';
import CheckOut from './components/CheckOut/CheckOut';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/checkout" element={
          <AuthRoute>
            <CheckOut></CheckOut>
          </AuthRoute>
        }></Route>
        <Route path="/contact" element={
          <AuthRoute>
            <Contact></Contact>
          </AuthRoute>
        }></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
