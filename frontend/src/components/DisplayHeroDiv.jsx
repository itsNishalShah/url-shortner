import { useRef , useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
export const DisplayHeroDiv = () => {
    const [ divState , setDivState ] = useState(false)
    const [ shortUrlState , setShortUrlState ] = useState('')
    const typeWriterRef = useRef(null);

    useEffect(() => {
        const app = typeWriterRef.current;
        const typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
        })
        typewriter
            .pauseFor(2500)
            .typeString('www.whatalongurl.com')
            .pauseFor(2000)
            .deleteAll()
            .typeString('www.getashorturl.com')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span style="color: #27ae60;">www.becomeamember.com</span>')
            .pauseFor(2000)
            .start();
            return () => {
            typewriter.stop();
            };              
    },[])

const getLink = async() => {
    const response = await fetch('http://localhost:4005/url',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: document.querySelector('input[name="url"]').value
        })
    })
    const data = await response.json()
    setDivState(true)
    setShortUrlState(data)
    
}
    return (
        <div className="h-full w-[90%] rounded-2xl bg-[#1D2A44]">
            <div className="h-full w-full flex flex-col items-center pt-[40px]">
                {/* text */}
                <div className="font-quicksand text-[20px] md:text-[40px] text-[#FFFFFF]">
                    <p>Cut the Clutter. Share the Link with</p>
                    <div className="flex justify-center pt-[20px]">
                    <p className="font-quicksand text-[30px] md:text-[50px] text-[#FFFFFF]">Shortlyyy</p>
                    </div>
                </div>
                <div ref={typeWriterRef} className="font-quicksand text-[24px] md:text-[32px] text-[#FFFFFF] mt-[20px] text-center"
                ></div>
                {/* button */}
                <input type="text" className="w-[300px] md:w-[600px] h-[40px] bg-[#FFFFFF] rounded-lg mt-[50px] placeholder:text-center text-center focus:outline-none" placeholder="www.placeyourlinkhere.com" name="url" />
                <button className="font-quicksand font-semibold w-[300px] md:w-[500px] h-[40px] bg-[#FFFFFF] rounded-lg mt-[20px]" onClick={getLink}>Get your shortlyyyynk :)</button>
                {divState?(
                    <div className="font-quicksand text-[12px] md:text-[26px] text-[#FFFFFF] mt-[20px] text-center"
                    >{shortUrlState}</div>
                ):(
                    <></>
                )}
                {/* extrainfo */}
                <div className="flex flex-col px-[20px] mt-[40px] md:mt-[20px] font-quicksand font-semibold w-[350px] md:w-full text-white h-[180px]  rounded-lg justify-center items-center text-justify">
                <p className="pt-[10px] mb-[20px] text-[20px] md:text-[30px] text-white text-left">Want More? Try Premium Features!</p>
                Custom short links, powerful dashboard, detailed analytics, API, UTM builder, QR codes, browser extension, app integrations and support.
                </div>
            </div>
        </div>
    );
}
