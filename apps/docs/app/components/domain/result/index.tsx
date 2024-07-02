"use client";

import { Heading } from "@repo/ui/components/ui/heading";
import { ResultCard } from "../../common/resultCard";
import Temp from "../../../../public/images/temp.png"

import "./style.css";

const ResultPage = () => {
  const personInfo = {
    name: "Marta",
    age: 27,
    gender: "Woman",
    description: "Looking for fun",
  };

  const scores = {
    attractiveness: 70,
    confidence: 80,
    authenticity: 60,
    potential: 90,
  };
  return (
    <main>
      <Heading level={1} className="pt-[86px] mb-0 text-white text-center" children={'Get detailed report'}/>
        
      <div className="w-full max-w-[342px] m-auto mt-11">
        <ResultCard
          imageUrl={Temp.src}
          personInfo={personInfo}
          scores={scores}
        />
      </div>
    </main>
  );
};

export default ResultPage;
