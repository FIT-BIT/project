import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const trainees = [
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Arpit",
      email: "Arpit@gmail.com",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Naman",
      email: "Naman@gmail.com",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Amisha",
      email: "Amisha@gmail.com",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Navya",
      email: "Navya@gmail.com",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Gagan",
      email: "Gagan@gmail.com",
      status: "Active",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sameer",
      email: "Sameer@gmail.com",
      status: "Active",
    },
  ];
  return (
    <div class="overflow-hidden lg:w-[80rem] lg:h-[30rem] ">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              State
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Role
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Team
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          {trainees.map((item, index) => (
            <tr key={index} class="hover:bg-gray-50">
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="relative h-10 w-10">
                  <img
                    class="h-full w-full rounded-full object-cover object-center"
                    src={item.avatar}
                    alt=""
                  />
                  <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div class="text-sm">
                  <div class="font-medium text-gray-700">{item.name}</div>
                  <div class="text-gray-400">{item.email}</div>
                </div>
              </th>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  {item.status}
                </span>
              </td>
              <td class="px-6 py-4">Product Designer</td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                    Design
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                    Product
                  </span>
                  <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                    Develop
                  </span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <Link to="/dashboard/profile">
                    <RemoveRedEyeIcon />
                  </Link>
                  <Link to="/dashboard/createRoutine">
                    <FitnessCenterIcon />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
