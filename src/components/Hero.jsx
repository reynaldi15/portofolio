import { LuImport } from "react-icons/lu"
import { motion } from "framer-motion";
import  benson from "../assets/benson.webp"

const Hero = () => {
    const text1 = "Reynaldi";
  const text2 = "Silalahi";

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            {/* <h1 className="mt-16 overflow-hidden text-center text-[12vw] font-semibold uppercase leading-none">
                
                Reynaldi <br/>Silalahi 
            </h1> */}
             <motion.h1
          className="mt-16 overflow-hidden text-center text-[12vw] font-semibold uppercase leading-none"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {text1.split("").map((char, i) => (
            <motion.span key={i} className="inline-block" variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          {text2.split("").map((char, i) => (
            <motion.span key={i + 100} className="inline-block" variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

            <div className="mt-8">
                <a href="/Reynaldi-Silalahi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
                        <span>Resume</span>
                        <LuImport className="ml-2"/>
                    </a>
            </div>
            {/* <div className="w-full"> */}
                {/* jangan lupa ganti gambar serta namanya */}
                {/* <img src={benson} alt="Benson Langford" className="mt-8 h-96 w-full object-cover" />
            </div> */}
        </div>
    </section>
  )
}

export default Hero