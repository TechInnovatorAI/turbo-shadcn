import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@repo/ui/components/ui/card";
import { Heading } from "@repo/ui/components/ui/heading";
import { ProgressBar } from "./progress";
import Logo from "../../../public/images/Logo-yellow.svg";

export interface ResultCardProps {
  imageUrl: string;
  personInfo: {
    name: string;
    age: number;
    gender: string;
    description: string;
  };
  scores: {
    attractiveness: number;
    confidence: number;
    authenticity: number;
    potential: number;
  };
}

const ResultCard: React.FC<ResultCardProps> = ({
  imageUrl,
  personInfo,
  scores,
}) => {
  return (
    <Card className="border bg-unset">
      <CardHeader className="flex flex-row flex-nowrap gap-7">
        <div className="w-28 h-40 rounded-md flex items-center">
          <img src={imageUrl} alt={personInfo.name} className="w-full" />
        </div>
        <div className="pt-5">
          <Heading level={4} className="text-white">
            {personInfo.name}
          </Heading>
          <div className="text-base text-white flex flex-col gap-3 ps-4 mt-[14px]">
            <div>{personInfo.age} yo</div>
            <div>{personInfo.gender}</div>
            <div>{personInfo.description}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-[rgba(255,255,255,0.8)] font-medium">
        <div>
          <Heading level={4} className="font-medium">
            Attractiveness
          </Heading>
          <ProgressBar progress={scores.attractiveness} className="mt-2" />
        </div>
        <div>
          <Heading level={4} className="font-medium">
            Confidence
          </Heading>
          <ProgressBar progress={scores.confidence} className="mt-2" />
        </div>
        <div>
          <Heading level={4} className="font-medium">
            Authenticity
          </Heading>
          <ProgressBar progress={scores.authenticity} className="mt-2" />
        </div>
        <div>
          <Heading level={4} className="font-medium">
            Potential
          </Heading>
          <ProgressBar
            progress={scores.potential}
            className="mt-2"
            barColor="#FF6032"
          />
        </div>
      </CardContent>
      <div className="flex justify-center items-center pb-6">
        <img src={Logo.src} alt="Roast" className="h-6" />
      </div>
    </Card>
  );
};

export { ResultCard };
