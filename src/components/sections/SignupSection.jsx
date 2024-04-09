import React from "react";
import ButtonLg from "../ButtonLg";
import AvatarDetails from "../AvatarDetails";

export default function SignupSection() {
  return (
    <section className=" mx-auto  mt-8 w-full bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto  py-16 w-full px-4 sm:px-6 lg:px-8 flex flex-wrap md:grid md:grid-cols-12 gap-10">
        <div className="flex flex-col gap-y-7  md:col-span-7">
          <p className="text-3xl md:text-5xl font-medium">
            Ready to get started?
          </p>
          <div className=" flex items-center gap-x-7">
            <ButtonLg title="SIGN UP FOR FREE" classes="p-4 px-8" />
            <div className="relative group">
              <a href="#" className="">
                TALK TO SALES
              </a>
              <span className="bg-red-400 absolute w-full h-0.5 bottom-0 left-0 transition-all duration-150 "></span>
            </div>
          </div>
        </div>
        <div className="flex justify-center  md:col-span-5">
          <div className="flex flex-col gap-5 border border-slate-700 p-7 rounded-3xl relative overflow-hidden">
            <q className="text-2xl font-light z-20">
              At any level of scale, RevenueCat just works
            </q>
            <div className="z-20">
            <AvatarDetails
              imgSrc={"/avatar/Ellipse2.png"}
              name={"David Smith, Widgetsmith"}
              classes="text-base text-white"
            />
            </div>

            <div className="relative group w-fit z-20">
              <a href="#" className="uppercase text-sm">
                Read Case Study
              </a>
              <span className="bg-red-400 absolute w-full h-0.5 bottom-0 left-0 transition-all duration-150 "></span>
            </div>
            <img src="/subscribe/cardLine.png" alt="" className="z-10 absolute w-72 h-72 top-0 -right-20 rotate-12 -scale-x-75 hidden md:block"/>
          </div>
        </div>
      </div>
    </section>
  );
}
