// src/Diagnosa.js

import React, { useState } from 'react';

const pertanyaanList = [
    "Apakah Anda sering merasa marah atau mudah tersinggung?",
    "Apakah Anda sering merasa sedih atau murung?",
    "Apakah Anda kehilangan minat atau kesenangan dalam kegiatan yang biasanya Anda nikmati?",
    "Apakah Anda merasa sulit tidur atau malah tidur terlalu banyak?",
    "Apakah Anda sering merasa lelah atau kekurangan energi meskipun sudah cukup tidur?",
    "Apakah Anda sering merasa tidak berharga atau memiliki rasa bersalah yang berlebihan?",
    "Apakah Anda sering berpikir tentang kematian atau memiliki pemikiran untuk bunuh diri?"
];

const skalaJawaban = ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak Pernah"];

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
            "Selalu": 5,
            "Sering": 4,
            "Kadang-kadang": 3,
            "Jarang": 2,
            "Tidak Pernah": 1
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
        <div className="app bg-merah">
            <h1 className='font-OpenSans'>Diagnosa Depresi</h1>
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
    );
}

export default Diagnosa;