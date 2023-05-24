import { Input } from "@mui/material";
import React, { useState } from "react";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CreateRoutine = () => {
  const exerciseRoutine = [
    {
      name: "bicep curl",
      imageLink:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "lunges",
      imageLink:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "pushups",
      imageLink:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "pullups",
      imageLink:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [bicepcurl, setBicepcurl] = useState(0);
  const [lunges, setLunges] = useState(0);
  const [pushups, setPushups] = useState(0);
  const [pullups, setPullups] = useState(0);
  const [nameOfRoutine, setNameOfRoutine] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedOptions(options);
  };

  const [list, setList] = useState([bicepcurl, lunges, pushups, pullups]);

  return (
    <div>
      <div class="flex sm:w-9/12  flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0 lg:w-full pt-64 sm:pt-0">
        <div class="flex w-full flex-col justify-start items-start">
          <div class="">
            <p class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Create Routine
            </p>
          </div>
          <div class="mt-2">
            <a
              href="1"
              class="text-base dark:text-gray-400 leading-4 focus:outline-none focus:underline hover:underline hover:text-gray-800 text-gray-600"
            >
              Never forget why you started ?
            </a>
          </div>

          <div class="mt-12 flex flex-col justify-start items-start w-full space-y-8">
            <input
              class="focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400  focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="text"
              value={nameOfRoutine}
              onChange={(event) => setNameOfRoutine(event.target.value)}
              placeholder="Name of Routine"
            />
            <div className="w-full max-w-md mx-auto">
              <label
                htmlFor="Select Exercise"
                className="block text-gray-700 font-bold mb-2"
              >
                Select Exercise
              </label>
              <select
                id="options"
                name="options"
                multiple
                value={selectedOptions}
                onChange={handleOptionChange}
                className="block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="option1">bicep curl</option>
                <option value="option2">lunges</option>
                <option value="option3">push ups</option>
                <option value="option4">pull ups</option>
                {/* Add more options here */}
              </select>
            </div>
            <label
              htmlFor="option"
              className="block text-gray-700 font-bold mb-2"
            >
              Select an Option:
            </label>
            <select
              id="option"
              name="option"
              value={selectedOption2}
              onChange={handleOptionChange2}
              className="block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
            >
              <option value="">Select no. of Sets</option>
              <option value="option1">set of 1</option>
              <option value="option2">set of 2</option>
              <option value="option3">set of 3</option>
              {/* Add more options here */}
            </select>
          </div>
          <button class="mt-8 text-base font-medium focus:ring-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
            Submit
          </button>
        </div>

        <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
          <div>
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Exercise
              </h3>
              <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Reps
              </h3>
            </div>
            <div class="flow-root">
              <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                {exerciseRoutine.map((item, index) => (
                  <li key={index} class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src={item.imageLink}
                          alt="Neilimage"
                        />
                      </div>
                      <div class="flex-1 min-w-20">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {item.name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          Exercise
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white ">
                        <div>
                          <label
                            htmlFor="myInput"
                            className="block text-gray-700 font-bold mb-2"
                          ></label>
                          <input
                            id="myInput"
                            type="text"
                            placeholder={list[index]}
                            // value={list[index]}
                            // onChange={(event) => setNameOfRoutine(event.target.value)}
                            className="block w-full bg-white border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoutine;