import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const exercises = [
    {
      avatar:
        "https://www.verywellfit.com/thmb/GXOUJzqtX9gqjCLZk9tWst4JJFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-much-walking-is-too-much-3975564-2237-9c1f6b10556445f28d8163b28b61291e.jpg",
      name: "Walk",
      email: "Arpit@gmail.com",
      status: "5",
    },
    {
      avatar:
        "https://teambodyproject.com/wp-content/uploads/2017/08/Screen-Shot-2017-11-18-at-09.02.40.png",
      name: "Rest",
      email: "Arpit@gmail.com",
      status: "3sec",
    },
    {
      avatar:
        "https://www.researchgate.net/profile/Mohammed-Abou-Elmagd/publication/341734848/figure/fig1/AS:896516470362114@1590757591713/Sample-of-Jumping-Jacks-Exercise-4.png",
      name: "Jumping Jacks",
      email: "Naman@gmail.com",
      status: "5",
    },
    {
      avatar:
        "https://teambodyproject.com/wp-content/uploads/2017/08/Screen-Shot-2017-11-18-at-09.02.40.png",
      name: "Rest",
      email: "Arpit@gmail.com",
      status: "3sec",
    },
    {
      avatar:
        "https://gethealthyu.com/wp-content/uploads/2014/08/Bicep-Curl_Exercise.jpg",
      name: "Bicep Curls",
      email: "Amisha@gmail.com",
      status: "5",
    },
    {
      avatar:
        "https://teambodyproject.com/wp-content/uploads/2017/08/Screen-Shot-2017-11-18-at-09.02.40.png",
      name: "Rest",
      email: "Arpit@gmail.com",
      status: "3sec",
    },
    {
      avatar:
        "https://mobilephysiotherapyclinic.in/wp-content/uploads/2022/02/dumbbell-shoulder-press-workout-exercise-vector-37014593_11zon-1280x720.jpg",
      name: "Shoulder Press",
      email: "Navya@gmail.com",
      status: "5",
    },
    {
      avatar:
        "https://teambodyproject.com/wp-content/uploads/2017/08/Screen-Shot-2017-11-18-at-09.02.40.png",
      name: "Rest",
      email: "Arpit@gmail.com",
      status: "3sec",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjgbWdDl7AT2yPNqGIAJxnAsay1DVtCUl0Q&usqp=CAU",
      name: "Squats",
      email: "Gagan@gmail.com",
      status: "5",
    },
    {
      avatar:
        "https://teambodyproject.com/wp-content/uploads/2017/08/Screen-Shot-2017-11-18-at-09.02.40.png",
      name: "Rest",
      email: "Arpit@gmail.com",
      status: "3sec",
    },
    {
      avatar:
        "https://www.netmeds.com/images/cms/wysiwyg/blog/2020/11/1605682353_Crunches_big_450.jpg",
      name: "Crunches",
      email: "Sameer@gmail.com",
      status: "5",
    },
    {
      avatar:
        "https://teambodyproject.com/wp-content/uploads/2017/08/Screen-Shot-2017-11-18-at-09.02.40.png",
      name: "Rest",
      email: "Arpit@gmail.com",
      status: "3sec",
    },
    {
      avatar:
        "https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg",
      name: "Push Ups",
      email: "Sameer@gmail.com",
      status: "5",
    },
  ];
  return (
    <div class="lg:w-[80rem] lg:h-[30rem] ">
      <a
        style={{
          textAlign: "right",
          border: "1px solid green",
          fontSize: "25px",
          padding: "0px 10px",
          marginBottom: '20px',
          
        }}
        href="http://127.0.0.1:8000/exercise"
      >
        Click here to start the workout!
      </a>
      <table style={{marginTop: '20px'}} class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
            <th
              style={{ fontSize: "25px" }}
              scope="col"
              class="px-6 py-4 font-medium text-gray-900"
            >
              Exercise
            </th>
            <th
              style={{ fontSize: "25px" }}
              scope="col"
              class="px-6 py-4 font-medium text-gray-900"
            >
              Repititions
            </th>

            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          {exercises.map((item, index) => (
            <tr key={index} class="hover:bg-gray-50">
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="relative h-100 w-100">
                  <img
                    style={{ height: 200, width: 200 }}
                    class="h-full w-full object-cover object-center"
                    src={item.avatar}
                    alt=""
                  />
                  <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
              </th>

              <td class="px-6 py-4" style={{ fontSize: "25px" }}>
                {item.name}
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  <p style={{ fontSize: "25px" }}>{item.status}</p>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
