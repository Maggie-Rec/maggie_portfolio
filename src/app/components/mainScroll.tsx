import React from "react";
import './mainPage.css'

const MainPage: React.FC = () => {
return (
  <>
    <div className="ml-10 mt-10">
      <p className="text-zinc-50 text-5xl"> Hello 👋🏻, I am</p>
      <h1 className="text-fuchsia-400 text-5xl ">Maggie Recio Gromowska</h1>
      <p className="text-zinc-50 text-5xl">Full Stack Developer from London</p>
    </div>

    <div className="ml-10 mr-28 mt-10">
      <p className="text-zinc-50 ">
        I develop websites with HTML, CSS, JavaScript, TypeScript, using modern
        frameworks and libraries like React, Next.js, Tailwind and building API
        integrations for the websites.
      </p>
      <p className="text-zinc-50 mt-5">
        Being a diligent, hardworking and result oriented lady, I always work
        towards achieving best result on each project I lay my hands on.
      </p>
    </div>
  
  </>
);
}

export default MainPage;