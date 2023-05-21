import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const MyWorkouts = () => {

    const workoutRoutines = [
        {
            avatar:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            description: "Full Body Workout",
            email: "Arpit@gmail.com",
            instructor: "Gagan",
        },
        {
            avatar:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            description: "Slip Disc Workout",
            email: "Naman@gmail.com",
            instructor: "Gagan",
        },
        {
            avatar:
                "https://new-cdn.mamamia.com.au/mamamia-pwa.appspot.com/cms_images/variations/1200x800-879620303253.jpg",
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

                            <a href="#">
                                <img alt="Placeholder" class="block h-auto w-full" src="https://new-cdn.mamamia.com.au/mamamia-pwa.appspot.com/cms_images/variations/1200x800-879620303253.jpg" />
                            </a>

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
