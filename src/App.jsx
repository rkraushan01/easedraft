import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
       <div className='relative z-0' style={{ backgroundColor: '#e6e0f4' }}>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
       
        <div className='relative z-0'>
          
        </div>
       
      </div>
    </BrowserRouter>
  );
}

export default App;