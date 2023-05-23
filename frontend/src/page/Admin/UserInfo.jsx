import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const trainees = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/146/146005.png",
      name: "Amisha Garg",
      email: "28 April, 2023",
      status: "Active",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/145/145867.png",
      name: "Arpit",
      email: "20 January, 2023",
      status: "Active",
    },
    {
      avatar:
        "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
      name: "Navya",
      email: "16 March, 2022",
      status: "Active",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetHwhv8OCIBYgMOeHOFkTGREVLfKTxly4Yi1YzIkdoH7Cl_zGim21ej1hpz72Llcvb7k&usqp=CAU",
      name: "Gagan",
      email: "15 February, 2023",
      status: "Active",
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1154/1154473.png",
      name: "Sameer",
      email: "20 December, 2021",
      status: "Active",
    },
  ];
  return (
    <div class="lg:w-[80rem] lg:h-[30rem] ">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th
              style={{ fontSize: "30px" }}
              scope="col"
              class="px-6 py-4 font-medium text-gray-900"
            >
              Trainees
            </th>
            <th
              style={{ fontSize: "30px" }}
              scope="col"
              class="px-6 py-4 font-medium text-gray-900"
            >
              Name
            </th>
            <th
              style={{ fontSize: "30px" }}
              scope="col"
              class="px-6 py-4 font-medium text-gray-900"
            >
              Joining Date
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          {trainees.map((item, index) => (
            <tr key={index} class="hover:bg-gray-50">
              <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div class="relative h-100 w-100">
                  <img
                    style={{ height: 100, width: 100 }}
                    class="h-full w-full rounded-full object-cover object-center"
                    src={item.avatar}
                    alt=""
                  />
                  <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                {/* <div class="text-sm">
                  <div class="font-medium text-gray-700">{item.name}</div>
                  <div class="text-gray-400">{item.email}</div>
                </div> */}
              </th>

              <td style={{ fontSize: "30px" }} class="px-6 py-4">
                {item.name}
              </td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <span
                    style={{ fontSize: "30px" }}
                    class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                  >
                    {item.email}
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
