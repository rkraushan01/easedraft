import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div style={{
          background: 'linear-gradient(to bottom, #87CEEB, #0000FF)',
          minHeight: '100vh',
          overflow: 'hidden' 
        }}>
          <Navbar />
          <Hero />
          <About />
          <Contact/>
        </div>
       
       
       
       
       
      </div>
    </BrowserRouter>
  );
}

export default App;
