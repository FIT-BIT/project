import { Input } from "@mui/material";
import React from "react";

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
      name: "pull ups",
      imageLink:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div>
      <div class="flex sm:w-9/12  flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0 lg:w-full pt-64 sm:pt-0">
        <div class="flex w-full flex-col justify-start items-start">
          <div class="">
            <p class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Check out
            </p>
          </div>
          <div class="mt-2">
            <a
              href="1"
              class="text-base dark:text-gray-400 leading-4 focus:outline-none focus:underline hover:underline hover:text-gray-800 text-gray-600"
            >
              Back to my bag
            </a>
          </div>
          <div class="mt-12">
            <p class="text-lg dark:text-white leading-4 text-gray-800">
              Sign in or continue as{" "}
              <a
                href="1"
                class="focus:outline-none dark:text-white hover:underline font-semibold focus:underline"
              >
                guest?
              </a>
            </p>
          </div>
          <div class="mt-12 flex flex-col justify-start items-start w-full space-y-8">
            <input
              class="focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400  focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              class="focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400  focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <button class="mt-8 text-base font-medium focus:ring-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
            Sign In
          </button>
          <div class="mt-4 flex justify-between items-center w-full">
            <a
              href="1"
              class="focus:outline-none dark:text-gray-400 focus:underline hover:underline text-sm leading-none text-gray-600"
            >
              Forgot password?
            </a>
            <a
              href="1"
              class="focus:outline-none dark:text-gray-400 focus:underline hover:underline text-sm leading-none text-gray-600"
            >
              Creat an account
            </a>
          </div>
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
                        <Input />
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
