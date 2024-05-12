import React from 'react';

const VisitStores = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                    <div>
                        <p class="font-medium text-blue-500 dark:text-blue-400">Our locations</p>

                        <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Visit our stores</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-400">Find us at these locations.</p>
                    </div>

                    <div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white">Melbourne</h2>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white">London</h2>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">100 Oxford Street <br> London W1D 1LL UK</p>
                        </div>

                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white">Sydney</h2>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white">San Francisco</h2>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 class="font-medium text-gray-800 dark:text-white">Byron Bay</h2>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 class="font-medium text-gray-700 dark:text-gray-200">Sweden</h2>
                            <p class="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisitStores;