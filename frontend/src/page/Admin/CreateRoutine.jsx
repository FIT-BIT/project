import React from 'react'

const CreateRoutine = () => {
  return (
    <div>

      <div class="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div class="flex w-full flex-col justify-start items-start">
              <div class="">
                  <p class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
              </div>
              <div class="mt-2">
                  <a href="javascript:void(0)" class="text-base dark:text-gray-400 leading-4 focus:outline-none focus:underline hover:underline hover:text-gray-800 text-gray-600">Back to my bag</a>
              </div>
              <div class="mt-12">
                  <p class="text-lg dark:text-white leading-4 text-gray-800">Sign in or continue as <a href="javascript:void(0)" class="focus:outline-none dark:text-white hover:underline font-semibold focus:underline focus:underline">guest?</a></p>
              </div>
              <div class="mt-12 flex flex-col justify-start items-start w-full space-y-8">
                  <input class="focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400  focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="email" placeholder="Email" />
                  <input class="focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:bg-transparent dark:placeholder-gray-400  focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="password" placeholder="Password" />
              </div>
              <button class="mt-8 text-base font-medium focus:ring-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Sign In</button>
              <div class="mt-4 flex justify-between items-center w-full">
                  <a href="javascript:void(0)" class="focus:outline-none dark:text-gray-400 focus:underline hover:underline text-sm leading-none text-gray-600">Forgot password?</a>
                  <a href="javascript:void(0)" class="focus:outline-none dark:text-gray-400 focus:underline hover:underline text-sm leading-none text-gray-600">Creat an account</a>
              </div>
          </div>

          <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
              <div>
                  <h1 class="text-2xl  dark:text-white dark:text-white font-semibold leading-6 text-gray-800">Order Summary</h1>
              </div>
              <div class="flex mt-7 flex-col items-end w-full space-y-6">
                  <div class="flex justify-between w-full items-center">
                      <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total items</p>
                      <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">20</p>
                  </div>
                  <div class="flex justify-between w-full items-center">
                      <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Total Charges</p>
                      <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$2790</p>
                  </div>
                  <div class="flex justify-between w-full items-center">
                      <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Shipping charges</p>
                      <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$90</p>
                  </div>
                  <div class="flex justify-between w-full items-center">
                      <p class="text-lg dark:text-gray-300 leading-4 text-gray-600">Sub total</p>
                      <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">$3520</p>
                  </div>
              </div>
              <div class="flex justify-between w-full items-center mt-32">
                  <p class="text-xl dark:text-white font-semibold leading-4 text-gray-800">Estimated Total</p>
                  <p class="text-lg dark:text-white font-semibold leading-4 text-gray-800">$2900</p>
              </div>
          </div>
      </div>
    </div>
    
  )
}

export default CreateRoutine