//react routr dom
import {BrowserRouter , Routes , Route } from 'react-router-dom'

//components
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar";
import Contact from './components/contact/Contact';

//pages
import HomePage from "./page/HomePage";
import WorkPage from "./page/WorkPage";
import WorkDetailsPage from "./page/WorkDetailsPage";
import AboutPage from "./page/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/works">
          <Route index  element={<WorkPage />} />
          <Route path=":id"  element={<WorkDetailsPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
