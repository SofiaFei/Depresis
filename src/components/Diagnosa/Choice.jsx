import React from "react";

const Choice = ({ name, question, onChange }) => {
  return (
    <div>
      <h3 class="mb-4 font-semibold text-dark dark:text-white">{question}</h3>
      <ul class="items-center w-full ml-4 mx-auto text-sm font-medium text-slate-900 bg-white/70 border border-krim rounded-lg sm:flex">
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`tidakpernah-${name}`}
              type="radio"
              value="tidakpernah"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
            />
            <label
              for={`tidakpernah-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tidak Pernah
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`jarang-${name}`}
              type="radio"
              value="jarang"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`jarang-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Jarang
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20  sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`sering-${name}`}
              type="radio"
              value="sering"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`sering-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Terkadang
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`sering-${name}`}
              type="radio"
              value="sering"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`sering-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sering
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`selalu-${name}`}
              type="radio"
              value="selalu"
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for={`selalu-${name}`}
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Selalu
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Choice;
