import { LuImport } from "react-icons/lu"
import  benson from "../assets/benson.webp"

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-16 overflow-hidden text-center text-[12vw] font-semibold uppercase leading-none">
                {/* Reynaldi <br />Silalahi  */}
                Reynaldi <br/>Silalahi 
            </h1>
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