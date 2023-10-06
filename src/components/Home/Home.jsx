import React, { useState, useEffect } from "react";
import { heroImg } from "../../assets";
import { BsCheckAll } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import TypeWriter from "./TypeWriter";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <section
        id="hero"
        className="w-full h-screen flex flex-row justify-center items-center bg-merahtua font-Jost"
      >
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-10/12 ml-8">
            <h1 className="text-2xl font-semibold"><TypeWriter text="Welcome To DEPRESIS" delay={100} /></h1>
            <h2>
              <TypeWriter text="Sistem Pakar Diagnosa Tingkat Depresi Mahasiswa Tingkat Akhir" delay={50} />
            </h2>
            <div className="flex justify-start">
              <a
                href="/Quiz"
                className="text-white font-semibold bg-biru scrollto rounded-full px-8 py-2 hover:text-blue-950 transition duration-300 hover:duration-500 ease-in-out"
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

      <section id="about" className="about bg-slate-100 w-full pt-28">
        <div className="flex-row justify-center bg-white" data-aos="fade-up" data-aos-duration="1500">
          <div className="w-10/12 mx-auto pb-16">
            <div className="text-center font-Jost text-4xl font-bold text-merahtua pt-16 pb-12">
              <h2 className="">
                ABOUT US
                <div className="mx-auto w-1/12">
                  <div className="border-b-[1px] border-slate-300 pb-6"></div>
                  <div className="border-b-[3px] border-biru w-1/3 mx-auto -m-[2px]"></div>
                </div>
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
                    <BsCheckAll className="w-12 h-12 text-biru mr-2" />
                    "Ingatlah bahwa DEPRESIS bukanlah pengganti layanan
                    profesional, jadi pastikan untuk selalu mencari bantuan
                    medis yang tepat jika Anda mengalami gejala depresi"
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 lg:pt-0 pb-16">
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

      <section id="faq" className="faq bg-slate-100" data-aos="fade-up" data-aos-duration="3000">
        <div className="flex-row justify-center" data-aos="fade-up">
          <div className="w-10/12 mx-auto pb-16">
            <div className="text-center font-Jost text-4xl font-bold text-merahtua pt-16 pb-12">
              <h2 className="">
                FREQUENTLY ASK QUESTIONS
                <div className="mx-auto w-1/12">
                  <div className="border-b-[1px] border-slate-300 pb-6"></div>
                  <div className="border-b-[3px] border-biru w-1/3 mx-auto -m-[2px]"></div>
                </div>
              </h2>
            </div>
            <div
              className="relative w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        <AiOutlineQuestionCircle className="text-biru" />
                        <span className=""> Apa itu DEPRESIS ?</span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      DEPRESIS adalah sebuah situs yang membantu mahasiswa akhir mengukur tingkat depresi mereka dengan mengisi formulir pertanyaan.
                      Kami menyediakan solusi sesuai setelah mahasiswa mengisi formulir tersebut.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div
              className="relative w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        <AiOutlineQuestionCircle className="text-biru" />
                        <span className=""> Siapa yang bisa mengakses DEPRESIS ?</span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      DEPRESIS ditujukan untuk mahasiswa akhir, namun siapa saja dapat mengakses situs ini dan mengisi formulir untuk mengetahui tingkat
                      depresi mereka.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div
              className="relative w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        <AiOutlineQuestionCircle className="text-biru" />
                        <span className=""> Apakah hasil dari DEPRESIS dapat diandalkan ?</span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      Hasil dari DEPRESIS adalah sebuah estimasi dari tingkat depresi seseorang, dan tidak bisa dianggap sebagai diagnosis yang pasti.
                      Kami sangat menyarankan agar seseorang yang merasa memiliki tingkat depresi yang tinggi untuk segera meminta bantuan profesional.
                    </p>
                  </details>
                </div>
              </div>
            </div>
            <div
              className="relative w-full bg-krim mt-6 ring-1 ring-krim sm:mx-auto sm:max-w-2xl rounded-md sm:px-10">
              <div className="mx-auto">
                <div className="py-6">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-biru font-Poppins font-slate-400 group-open:text-biru">
                      <div className="flex items-center gap-4">
                        <AiOutlineQuestionCircle className="text-biru" />
                        <span className=""> Bagaimana cara mengakses solusi yang ditawarkan DEPRESIS ?</span>
                      </div>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision"
                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn text-base mt-3 text-slate-600 text-justify px-7">
                      Setelah mengisi formulir, mahasiswa akan menerima rekomendasi solusi sesuai dengan tingkat depresi yang terdeteksi.
                      Kami juga menyediakan tautan ke sumber informasi dan bantuan profesional yang dapat membantu mahasiswa mengatasi depresi mereka.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
