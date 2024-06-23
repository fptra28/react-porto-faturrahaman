import React from "react";
import TitleSection from "../title/title";
import CardSocmed from "../card/cardSocmed";
import { SocMed } from "../../data/data";

const ListSocmed = () => {
  return (
    <section className="py-16 flex flex-col gap-8 font-primary">
      <div className="flex flex-col gap-4">
        <TitleSection textColor="text-neutral-950" lineColor="bg-red-800">
          Contact Me
        </TitleSection>
        <div className="text-lg flex justify-center font-semibold">
          You can Contact me at
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-6 md:px-10 xl:px-52">
        {SocMed.map((item) => (
          <CardSocmed SocMed={item.name} img={item.image} url={item.url} />
        ))}
      </div>
    </section>
  );
};

export default ListSocmed;
