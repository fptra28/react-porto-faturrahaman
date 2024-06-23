import React from "react";
import ButtonDownload from "./button/buttonDownload";

const JumbotronAbout = () => {
  return (
    <section className="w-full px-6 md:px-20 min-[1405px]:px-52 py-16 flex flex-col min-[1500px]:flex-row justify-center items-center gap-10 md:gap-20">
      <img
        className="lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[321.6px] xl:w-[600px] xl:h-[643.20px] drop-shadow-S1"
        src="/assets/PP.png"
        alt="Profile Picture"
      />
      <div className="flex flex-col gap-5">
        <div className="text-red-800 text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          About Me
        </div>
        <div className="text-slate-950 text-base md:text-lg lg:text-xl text-justify flex flex-col gap-4">
          <div>
            Hello, I'm Muhammad Faturrahman Putra, a passionate Web Developer
            and UI/UX Designer with a love for creating beautiful and functional
            digital experiences. I believe that great design has the power to
            enhance lives and transform businesses.
          </div>
          <div>
            With a background in both web development and user
            interface/experience design, I specialize in crafting interfaces
            that are not only visually appealing but also intuitive and
            user-friendly. My goal is to create designs that not only meet the
            needs of users but exceed their expectations.
          </div>
          <div>
            I am constantly seeking new challenges and opportunities to grow as
            a designer and developer. Let's collaborate and create something
            amazing together!
          </div>
        </div>
        <div className="mt-5">
          <ButtonDownload />
        </div>
      </div>
    </section>
  );
};

export default JumbotronAbout;
