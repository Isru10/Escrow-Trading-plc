import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import { ReactTyped } from "react-typed";

 const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <motion.p                 
        
                whileInView={{y:0,opacity:1}}
                initial={{y:-100,opacity:0}}
                transition={{duration:0.5}}
                className='text-gray-300 font-bold  p-2 flex justify-center align-center text-center'>

                  More than three Million students across colleges suffer from

          
          
        </motion.p>

        
          
        <ReactTyped
                    className='text-[#00df9a] font-bold md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 flex justify-center align-center text-center'
                      strings={['DEPRESSION', 'ANXIETY', 'SUCICDE']}
                      typeSpeed={120}
                      backSpeed={140}
                      loop
                    />
        <Hero />
        
      </ReactLenis>
    </div>
  );
};


const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full rounded-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1525971996320-268f0402052f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhZCUyQyUyMGRlcHJlc3Npb24lMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
         

    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/src/assets/Tranquil/Theaded.jpg"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/3 "
      />
      <ParallaxImg
        src="/src/assets/Tranquil/Tshadow.jpg"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-1/3"
      />
      <ParallaxImg
        src="/src/assets/Tranquil/Tworry.jpg"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="/src/assets/Tranquil/help.jpg"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <div className="">
      
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}

    />


{/* <motion.div
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{
        transform, 
        opacity,
        backgroundImage:src,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",}}

        
    > 
      
      <h1 className="text-white font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic doloremque  </h1>
      </motion.div> */}
          

    </div>
  );
};

export default SmoothScrollHero;