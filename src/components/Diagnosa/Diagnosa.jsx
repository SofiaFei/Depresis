// src/Diagnosa.js

import React, { useState } from 'react';
import Choice from "./Choice";
import { questions } from "./question";

const pertanyaanList = [
    "Apakah Anda sering merasa marah atau mudah tersinggung?",
    "Apakah Anda sering merasa sedih atau murung?",
    "Apakah Anda kehilangan minat atau kesenangan dalam kegiatan yang biasanya Anda nikmati?",
    "Apakah Anda merasa sulit tidur atau malah tidur terlalu banyak?",
    "Apakah Anda sering merasa lelah atau kekurangan energi meskipun sudah cukup tidur?",
    "Apakah Anda sering merasa tidak berharga atau memiliki rasa bersalah yang berlebihan?",
    "Apakah Anda sering berpikir tentang kematian atau memiliki pemikiran untuk bunuh diri?"
];

const skalaJawaban = ["Tidak Pernah", "Jarang", "Kadang-kadang", "Sering", "Selalu"];

// const skalaJawaban = [
//     {
//         id: 1,
//         skala: "Tidak Pernah"
//     },
//     {
//         id: 2,
//         skala: "Jarang"
//     },
//     {
//         id: 3,
//         skala: "Kadang-Kadang"
//     },
//     {
//         id: 4,
//         skala: "Sering"
//     },
//     {
//         id: 5,
//         skala: "Selalu"
//     }];

function Diagnosa() {
    const [jawaban, setJawaban] = useState(Array(pertanyaanList.length).fill(null));
    const [hasil, setHasil] = useState(null);
    const [solusi, setSolusi] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        if (jawaban.some(j => j === null)) {
            setError("Silakan pilih jawaban untuk setiap pertanyaan.");
            return;
        }

        const nilaiSkala = {
            "Tidak Pernah": 1,
            "Jarang": 2,
            "Kadang-kadang": 3,
            "Sering": 4,
            "Selalu": 5,
        };

        const totalSkor = jawaban.reduce((acc, val) => acc + nilaiSkala[val], 0);
        const skorMax = 5 * pertanyaanList.length;

         if (totalSkor >= skorMax * 0.8) {
            setHasil('Depresi Berat');
            setSolusi('Kami sarankan Anda segera konsultasi dengan ahli kesehatan mental.');
        } else if (totalSkor >= skorMax * 0.5) {
            setHasil('Depresi Menengah');
            setSolusi('Pertimbangkan untuk berbicara dengan konselor atau terapis.');
        } else if (totalSkor >= skorMax * 0.2) {
            setHasil('Depresi Ringan');
            setSolusi('Coba lakukan relaksasi dan aktivitas yang Anda sukai.');
        } else {
            setHasil('Tidak Depresi');
            setSolusi('Tetap jaga kesehatan mental Anda.');
        }
    };

    return (
        <section className="app bg-merahtua">
            <div className='container mx-auto py-16 w-5/6 lg:w-2/3'>
                {/* form */}
                <div className='bg-krim p-6 px-20 rounded-xl shadow-md'>
                    <h1 className='font-bold font-OpenSans text-3xl text-center mb-8 text-merahtua  '>Diagnosa Depresi</h1>
            {error && <p className="text-red-500">{error}</p>}
            
            {pertanyaanList.map((pertanyaan, index) => (
                <div key={index}>
                    <p>{pertanyaan}</p>
                    {skalaJawaban.map((skala, sIndex) => (
                        <label key={sIndex}>
                            <input 
                                type="radio" 
                                value={skala} 
                                checked={jawaban[index] === skala}
                                onChange={() => setJawaban(prev => {
                                    const newArr = [...prev];
                                    newArr[index] = skala;
                                    return newArr;
                                })}
                            /> {skala}
                        </label>
                            {/* <div id="form-wrapper">
                                <form>
                                    <div id="diagnosis-slider">
                                        {skalaJawaban.map((skala, index) => (
                                            <div>
                                                <input type="radio" name="diagnosis" id={skala?.id} value={index} required />
                                                <label for={skala?.id} data-diagnosis={skala?.skala}>{skala?.ska}</label>
                                            </div>
                                        )
                                        )}
                                    </div>
                                    <div id="diagnosis-pos"></div>

                                </form>
                            </div> */}
                    ))}
                </div>
            ))}
            
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Cek Hasil</button>
            
            {hasil && (
                <div className="hasil mt-4">
                    <h2 className="text-lg font-bold">Hasil: {hasil}</h2>
                    <p className="text-base font-semibold mt-2">{solusi}</p>
                </div>
            )}
        </div>
            </div>
        </section>
    );
}

export default Diagnosa;