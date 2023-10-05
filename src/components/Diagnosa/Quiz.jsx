import React, { useState } from "react";
import Choice from "./Choice";
import { questions } from "./question";

const Quiz = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [data, setData] = useState({});

    const updateData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <section className="bg-merahtua">
            <div className="p-16 mx-auto w-5/6 lg:w-9/12 flex flex-col gap-5">
                <form
                    onSubmit={submit}
                    className="bg-krim p-6 px-20 rounded-xl shadow-md">
                    <h1 className='font-bold font-OpenSans text-3xl text-center mb-8 text-merahtua  '>Diagnosa Depresi</h1>
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
                                class="text-white bg-gradient-to-br from-merah to-merahtua hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-merah font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-1/3"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </section>

    );
};

export default Quiz;
