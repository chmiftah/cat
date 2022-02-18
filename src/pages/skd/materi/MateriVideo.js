import React from 'react'

export default function MateriVideo() {
    return (
        <div>
            <div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="p-4">
                        <p className="text-4xl font-semibold">Materi Videos SKD CPNS</p>
                    </div>
                    <hr />

                    <div className="w-3/4 flex p-2 my-2 space-x-4">

                        <div className="w-1/3 bg-indigo-500 rounded-md p-4">
                            <p className="text-center text-white text-md font-thin">Tes Wawasan Kebangsaan</p>

                        </div>

                        <div className="w-1/3 border border-indigo-500 rounded-md p-4">
                            <p className="text-center text-indigo-500 text-md font-thin">Tes Wawasan Kebangsaan</p>

                        </div>

                        <div className="w-1/3 border border-indigo-500 rounded-md p-4">
                            <p className="text-center text-indigo-500 text-md font-thin">Tes Wawasan Kebangsaan</p>

                        </div>

                    </div>

                    <div className="flex px-2">
                        <div className="w-full mr-4">
                            <input type="search" className="outline-none border border-gray-300 p-4 w-full text-md font-extralight " placeholder="cari materi" />

                        </div>
                        <div>
                            <button className="p-4 bg-indigo-500 text-white text-md font-thin">Search</button>
                        </div>
                    </div>
                    <div className="p-4 my-4 grid grid-cols-1 lg:grid-cols-4 gap-x-8 ">

                        <div className="">
                            <div>
                                <video src="https://www.youtube.com/watch?v=9_1GqW5VHKg" width="700" height="400" controls="controls" autoplay="true" />
                            </div>
                            <div className="flex mt-4 gap-x-3 ">
                                <div>
                                    <div className="p-6 lg:p-6 md:p-4 bg-gray-300 rounded-full">
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl lg:text-2xl md:text-lg font-semibold">TIU - Deret Aritmatika</p>
                                    <p className="font-thin text-sm text-gray-600 ">published : 7 January 2021</p>
                                </div>
                            </div>
                        </div>


                        <div className="">
                            <div>
                                <video src="https://www.youtube.com/watch?v=9_1GqW5VHKg" width="700" height="400" controls="controls" autoplay="true" />
                            </div>
                            <div className="flex mt-4 gap-x-3 ">
                                <div>
                                    <div className="p-6 lg:p-6 md:p-4 bg-gray-300 rounded-full">
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl lg:text-2xl md:text-lg font-semibold">TIU - Deret Aritmatika</p>
                                    <p className="font-thin text-sm text-gray-600 ">published : 7 January 2021</p>
                                </div>
                            </div>
                        </div>



                        <div className="">
                            <div>
                                <video src="https://www.youtube.com/watch?v=9_1GqW5VHKg" width="700" height="400" controls="controls" autoplay="true" />
                            </div>
                            <div className="flex mt-4 gap-x-3 ">
                                <div>
                                    <div className="p-6 lg:p-6 md:p-4 bg-gray-300 rounded-full">
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl lg:text-2xl md:text-lg font-semibold">TIU - Deret Aritmatika</p>
                                    <p className="font-thin text-sm text-gray-600 ">published : 7 January 2021</p>
                                </div>
                            </div>
                        </div>



                        <div className="">
                            <div>
                                <video src="https://www.youtube.com/watch?v=9_1GqW5VHKg" width="700" height="400" controls="controls" autoplay="true" />
                            </div>
                            <div className="flex mt-4 gap-x-3 ">
                                <div>
                                    <div className="p-6 lg:p-6 md:p-4 bg-gray-300 rounded-full">
                                    </div>
                                </div>
                                <div>
                                    <p className="text-2xl lg:text-2xl md:text-lg font-semibold">TIU - Deret Aritmatika</p>
                                    <p className="font-thin text-sm text-gray-600 ">published : 7 January 2021</p>
                                </div>
                            </div>
                        </div>






                    </div>




                </div>
            </div>
        </div>
    )
}
