import React from "react";
import { converstation } from "../../../store/static";
import Section from "../../main/section/Section";

const static_data_list = converstation.about.about.map(
  (item: { title: string; body: string; id: number; img: string }) => (
    <div className="flex m-10 " key={item.id}>
      <img src={item.img} alt="logo" className="w-12 h-12 mt-4 " />
      <div className="px-2 py-4 ">
        <p className=" font-['Mochiy'] text-xl text-yellow-500 ">
          {item.title}
        </p>
        <p className="text-xl text-stone-500 font-semibold">{item.body}</p>
      </div>
    </div>
  )
);
function About() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 content pt-20">
        <img
          src={converstation.about.background}
          alt="picture with display on PC, phone and table"
          className=" md:mt-auto md:mb-auto w-10/12 ml-auto mr-auto"
          loading="lazy"
        />
        <div className="">
          {static_data_list}
          <div className="md:flex">
            
            <div className="md:mt-auto md:mb-auto ">

              <NavLink

                 to="https://play.google.com/store/apps/details?id=com.language_shool_app">
                 <img
                  src={converstation.about.googlestore}
                  className="w-64 p-4"
                  alt="button googlestore"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
