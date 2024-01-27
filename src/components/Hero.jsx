import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>

        </div>

        <div>
          <h1 className={`text-[#915EFF] ${styles.heroHeadText} text-blue`}>
            AI-powered video <span className='text-black'>creations at scale</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            Effortlessly produce studio quality videos  <br className='sm:block hidden' />
            with AI-generated avatars and voices.
          </p>
        </div>
      </div>



      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
              <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center flex-col'>
                <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '20px', padding: '12px 24px', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                  Get started for free
                  <span style={{ marginLeft: '8px' }}>→</span>
                </button>
                <p style={{ color: 'black', marginTop: '16px' }}>No credit card needed</p>
              </div>



            </div>

          </div>

          <div style={{ backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: '15px', lineHeight: '1.5', padding: '10px', borderRadius: '8px', position: 'absolute', left: '20px', top: '2px', height: '150px', width: '500px' }}>
  <span style={{ fontWeight: 'bold', color: 'blue' }}>Script</span>
  <p style={{ marginTop: '8px', color: 'black' }}>
    Hey there! Welcome to HeyGen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media, presentations, education, and more.
  </p>
</div>

        </div>
        
        


      </div>
 


    </section>
  );
};

export default Hero;