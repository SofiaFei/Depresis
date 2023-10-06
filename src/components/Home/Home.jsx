import React,{ useState, useEffect } from "react";
import { heroImg } from "../../assets";
import { BsCheckAll } from "react-icons/bs";
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="w-full h-screen flex flex-row justify-center items-center bg-merahtua font-Jost"
      >
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-10/12 ml-8">
            <h1 className="text-2xl font-semibold"><TypeWriter text="Welcome To DEPRESIS" delay={350} /></h1>
            <h2>
              <TypeWriter text="Sistem Pakar Diagnosa Tingkat Depresi Mahasiswa Tingkat Akhir" delay={100} />
            </h2>
            <div className="flex justify-start">
              <a
                href="/Quiz"
                className="text-white font-semibold bg-biru scrollto rounded-full px-8 py-2 hover:text-blue-950 transition duration-300 hover:duration-500  ease-in-out"
              >
                Cek Tingkat Depresimu Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={heroImg} className="animated w-10/12" alt="" />
        </div>
      </section>

      <section id="about" className="about bg-white w-full pt-28">
        <div className="flex-row justify-center bg-white" data-aos="fade-up">
          <div className="w-10/12 mx-auto pb-16">
            <div className="text-center font-Jost text-4xl font-bold text-merahtua pt-16 pb-12">
              <h2 className="">
                ABOUT US
                <div className="border-b-2 border-slate-300 mx-[570px] pb-3"></div>
                <div className="border-b-[3px] border-biru mx-[610px] -m-[2px]"></div>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 text-justify font-Poppins">
              <div className="mb-4">
                <p className="text-gray-700 mb-4">
                  DEPRESIS adalah situs yang membantu mahasiswa akhir mengukur
                  tingkat depresi mereka dengan mengisi formulir pernyataan.
                  Kami percaya bahwa mengetahui tingkat depresi Anda adalah
                  langkah pertama dalam menemukan solusi dan menangani masalah
                  ini. Selain itu, kami juga menyediakan informasi dan sumber
                  daya yang berguna untuk membantu Anda dalam mengelola depresi
                  Anda
                </p>
                <ul>
                  <li className="flex">
                    <BsCheckAll className="w-12 h-12 text-biru mr-2" />{" "}
                    "Ingatlah bahwa DEPRESIS bukanlah pengganti layanan
                    profesional, jadi pastikan untuk selalu mencari bantuan
                    medis yang tepat jika Anda mengalami gejala depresi"
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pb-16">
                <p className="mb-6">
                  Kami membuat DEPRESIS sebagai proyek untuk membantu
                  teman-teman yang mungkin mengalami depresi untuk mengetahui
                  tingkat depresi dan menemukan solusi sesuai.
                </p>
                <a href="#" className="">
                  <button className="border-biru border-2 px-8 py-2 rounded-md hover:bg-biru hover:text-slate-200 font-Poppins text-biru font-medium tracking-wider text-sm transition duration-300 hover:duration-500  ease-in-out">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
