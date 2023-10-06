import React, { useState } from "react";
import Choice from "./Choice";
import { questions } from "./question";
import Modal from './Modal';
import Diagnosa from "./Diagnosa";

const Quiz = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({});
    const [hasil, setHasil] = useState(null);
    const [solusi, setSolusi] = useState(null);

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const submit = (e) => {
        e.preventDefault();

        const nilaiSkala = {
            "Tidak Pernah": 1,
            "Jarang": 2,
            "Kadang-kadang": 3,
            "Sering": 4,
            "Selalu": 5,
        };

        const totalSkor = Object.values(data).reduce((acc, val) => acc + nilaiSkala[val], 0);
        const skorMax = 5 * questions.length;

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

        toggleModal();
    };

    return (
        <section className="bg-merahtua">
            <div className="p-16 mx-auto w-5/6 lg:w-9/12 flex flex-col gap-5">
                <form
                    onSubmit={submit}
                    className="bg-krim p-6 px-20 rounded-xl shadow-md">
                    <h1 className='font-bold font-OpenSans text-3xl text-center mb-8 text-merahtua'>Diagnosa Depresi</h1>
                    <div className="">
                        {questions.map((e) => {
                            return (
                                <div className="w-11/12 mx-auto mt-10 text-lg">
                                    <Choice
                                        key={e.name}
                                        question={e.question}
                                        name={e.name}
                                        onChange={updateData}
                                    /> 
                                </div>
                            );
                        })}
                        <div className="w-full flex justify-center mt-10">
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-br from-merah to-merahtua hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-merah font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-1/3"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

                <Modal 
                    isOpen={isOpen} 
                    onClose={toggleModal}
                    title="Hasil Diagnosa"
                    content={
                        <>
                            <h2 className="text-lg font-bold">Hasil: {hasil}</h2>
                            <p className="text-base font-semibold mt-2">{solusi}</p>
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default Quiz;