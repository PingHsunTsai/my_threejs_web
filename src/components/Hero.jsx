import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto z-[]'> 
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-10 h-10 rounded-full bg-[#ffffff]' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white text-outline`}>Hi, I'm <span className='text-secondary'>PingHsun</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-outline`}>
            An Engineer Enjoying Creativitive And Innovation !
            <br className='sm:block hidden'/>
          </p>
          <h2 className={`${styles.heroSubText} text-white text-outline`}>Let me introduce myself -&gt; </h2>
        </div>
      </div>

      {/* <div className='relative w-full h-full pt-96'>
        <ParticlesCanvas />
      </div> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ 
                y: [0, 24, 0]
               }}
               transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop',
               }}
               className='w-3 h-3 bg-secondary rounded-full mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero