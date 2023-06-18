import React from "react";


/* Components */
import InfoCard from "./components/card"
import MainPage from "./components/mainScroll";


const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 ">
        <InfoCard />

        <div className="grid col-span-2 mt-10 grid-rows-3">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default Home;