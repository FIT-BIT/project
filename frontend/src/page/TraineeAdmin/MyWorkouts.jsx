import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const MyWorkouts = () => {

    const workoutRoutines = [
        {
            avatar:
                "https://i.ytimg.com/vi/C8DbCZGj5KQ/maxresdefault.jpg",
            description: "Full Body Workout",
            email: "Arpit@gmail.com",
            instructor: "Gagan",
        },
        {
            avatar:
                "https://www.metropolisindia.com/blog/wp-content/uploads/2023/01/Slipped-Disc-Exercises-for-Pain-Relief-and-Treatment.jpg",
            description: "Slip Disc Workout",
            email: "Naman@gmail.com",
            instructor: "Gagan",
        },
        {
            avatar:
                "https://www.nourishmovelove.com/wp-content/uploads/2023/01/arm-toning-exercises-bicep-flex-scaled.jpg",
            description: "Arms Workout",
            email: "Amisha@gmail.com",
            instructor: "Navya",
        },
    ]

    return (
        <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                {workoutRoutines.map((item, index) => (


                    <div key={index} class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        <article class="overflow-hidden rounded-lg shadow-lg">

                        <Link
    to={"/TraineeDashboard/workoutExercises"}
    class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
  >
                                <img style={{ height: 200, width: 400 }} alt="Placeholder" class="block h-auto w-full" src={item.avatar} />
                            </Link>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black" href="#">
                                        {item.description}
                                    </a>
                                </h1>
                                {/* <p class="text-grey-darker text-sm">
                                11/1/19
                            </p> */}
                            </header>

                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" style={{ height: 32, width: 32 }} class="block rounded-full" src="https://www.kindpng.com/picc/m/337-3372139_trainer-png-1-png-image-personal-trainer.png" />
                                    <p class="ml-2 text-sm">
                                        {item.instructor}
                                    </p>
                                </a>
                                <Button variant="outlined">View feedback</Button>
                            </footer>

                        </article>

                    </div>

                ))}
            </div>
        </div>
    );
};

export default MyWorkouts;
