import React from "react";
import Image from "next/image";
import Photo from "../assets/maggierecio.jpeg";
import "./card.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const InfoCard: React.FC = () => {
  return (
    <>
      <div className=" sticky t-10 block max-w-sm p-6 bg-black border border-fuchsia-400 rounded-lg shadow dark:bg-black dark:border-gray-700 mt-12 ml-12 hover:shadow-fuchsia-400 shadow-2xl transition ease-in-out duration-700">
        <div className="flex justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Maggie
          </h5>
          <div>
            <p className="text-sm tracking-tight text-white dark:text-white">
              Front End{" "}
            </p>
            <p className="text-sm tracking-tight text-white dark:text-white">
              Developer
            </p>
          </div>
        </div>
        <Image
          src={Photo}
          alt="Maggie photo"
          className="mt-3 mb-3 rounded-xl"
        />
        <div className="cvBtn flex justify-center mt-5 mb-5">
          <button className="bookmarkBtn">
            <span className="IconContainer">
              <svg viewBox="0 0 384 512" height="0.9em" className="icon">
                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
              </svg>
            </span>
            <p className="text">my CV</p>
          </button>
        </div>
        <p className="flex justify-center font-normal text-gray-700 dark:text-gray-400 hover:text-white">
          <a href="mailto:m.reciogrom@gmail.com">m.reciogrom@gmail.com</a>
        </p>
        <p className="flex justify-center font-normal text-gray-700 dark:text-gray-400">
          Based in London, UK
        </p>
        <div className="flex justify-center mt-3">
          <a
            href="https://www.linkedin.com/in/marzena-recio-gromowska-software-developer/"
            target="_blank"
          >
            <FaLinkedinIn className="text-white text-3xl mr-3 hover:animate-bounce" />{" "}
          </a>
          <a href="https://github.com/Maggie-Rec" target="_blank">
            {" "}
            <FaGithub className="text-white text-3xl ml-3 hover:animate-bounce" />
          </a>
        </div>
        <div className="flex justify-center">
          <a href="mailto:m.reciogrom@gmail.com">
            <button className="contactBtn mt-7" id="contactBtn">Contact me</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
