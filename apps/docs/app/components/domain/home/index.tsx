'use client'
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.svg";
import { Heading } from "@repo/ui/components/ui/heading";
import HomeImg from "../../../../public/images/home_visual.png";
import "./style.css";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation(`common`);
  
    return (
      <main>
        <div className="w-full">
          <div className="pt-12 flex justify-center">
            <Image src={Logo} alt="Roast Logo" />
          </div>
          <Heading level={2} className="mt-11 mb-0 p-0 text-white text-center" children={t(`Upload your dating pics`)}/>
          <Heading level={6} className="mt-3 text-color text-white text-center" children={'To get your profile analysis'} />
          <div className="mt-11 text-center flex justify-center">
            <Image src={HomeImg} alt="Dating Home" width={250} />
          </div>
          <div className="fixed bottom-12 left-0 flex justify-center w-full">
            <a href="/upload">
              <Button className="bg-white py-4 text-center text-black px-[88px] rounded-full h-[58px]">
                <Heading level={4} className="mb-0 p-0 text-black text-center" children={'Upload photos'}/>
              </Button>
            </a>
          </div>
        </div>
      </main>
    );
};

export default HomePage;
