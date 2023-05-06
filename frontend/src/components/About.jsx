import React from 'react'
const About = () => {
    return (
        <>
            <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap items-center justify-between">
                        <div class="w-full px-4 lg:w-6/12">
                            <div class="-mx-3 flex items-center sm:-mx-4">
                                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div class="py-3 sm:py-4">
                                        <img
                                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                                            alt=""
                                            class="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div class="py-3 sm:py-4">
                                        <img
                                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                                            alt=""
                                            class="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div class="relative z-10 my-4">
                                        <img
                                            src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                                            alt=""
                                            class="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div class="mt-10 lg:mt-0">
                                <span class="text-primary text-blue-600 mb-2 block text-lg font-semibold">
                                    Why Choose Us
                                </span>
                                <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                                    Make your customers happy by giving services.
                                </h2>
                                <p class="text-body-color mb-8 text-base">
                                    It is a long established fact that a reader will be distracted by
                                    the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p class="text-body-color mb-12 text-base">
                                    A domain name is one of the first steps to establishing your brand.
                                    Secure a consistent brand image with a domain name that matches your
                                    business.
                                </p>
                                <a
                                    href="1"
                                    class="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default About