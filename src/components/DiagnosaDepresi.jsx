// src/DiagnosaDepresi.js

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

function DiagnosaDepresi() {
    const [jawaban, setJawaban] = useState(Array(pertanyaanList.length).fill(null));
    const [hasil, setHasil] = useState(null);

    const handleSubmit = () => {
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
        } else if (totalSkor >= skorMax * 0.5) {
            setHasil('Depresi Menengah');
        } else if (totalSkor >= skorMax * 0.2) {
            setHasil('Depresi Ringan');
        } else {
            setHasil('Tidak Depresi');
        }
    };

    return (
        <div className="app" >
            <h1>Diagnosa Depresi</h1>
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
            <button onClick={handleSubmit}>Cek Hasil</button>
            {hasil && <div className="hasil"><h2>Hasil: {hasil}</h2></div>}
        </div>
    );
}

export default DiagnosaDepresi;