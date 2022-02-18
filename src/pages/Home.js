import React from 'react'
import hero from './hero.png'

export default function Home() {
    return (

        <div>
            <div className="bg-white max-w-screen-xl mx-auto p-3">
                <p className="text-center font-semibold font-Rubik text-lg">
                    Tryout Akbar Sekolah ASN Gratis. Daftar Sekarang Juga <span className="border-2 mx-2 border-blue-500 px-4  text-sm rounded-full text-blue-600">lihat detail</span>
                </p>

            </div>
            <div style={{ backgroundColor: '#3b6ebb' }}>
                <div className="max-w-screen-2xl mx-auto ">

                    <div>
                        <div className="p-6 flex justify-between items-center">
                            <div>
                                <p className="text-white text-3xl font-light font-Rubik">OLC Edukasi</p>
                            </div>
                            <div className="hidden lg:block">
                                <ul className="flex space-x-10 text-white text-lg font-medium font-Rubik">
                                    <li>Beranda</li>
                                    <li>Keunggulan</li>
                                    <li>Fitur</li>
                                    <li>Paket</li>
                                    <li>Artikel</li>
                                </ul>
                            </div>
                            <div>
                                <button className="border-2 border-white rounded-full py-2 px-8 text-white font-medium font-Rubik"><a href="/login">Daftar Sekarang</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:content-end py-40 px-8  ">

                        <div className="lg:flex flex-row-reverse">
                        <div className="w-full lg:w-1/2">
                                <img src={hero} className="lg:-mt-16 lg:ml-12" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-5">
                                <div className=" space-y-4 ">
                                    <p className="text-white text-lg  font-Rubik">Kami percaya, kamu pasti mampu menggapai cita-citamu,<br /> jadi jangan ragu siapkan dirimu sekarang juga bersama<br /> SekolahASN</p>
                                    <p className="text-4xl text-yellow-300 font-bold  font-Rubik">#GapaiKarirImpianmu</p>
                                    <p className="text-4xl text-white font-semibold  font-Rubik">bersama OLC Edukasi</p>
                                </div>

                                <div className=" flex items-center justify-center content-center">
                                  <div className="w-full">

                                   <a className="mb-5 w-full bg-white py-4 px-5 block text-center  rounded-full text-blue-500 text-lg w-3/4 font-semibold mt-6">Login</a>
                                    <a className="border w-full block text-center border-white-4 text-white text-lg font-semibold px-5 py-4 w-3/4 rounded-full"> Daftar Sekarang</a> 
                                  </div>
                                  
                                </div>

                            </div>
                        

                        </div>

                    </div>

                </div>

            </div>

            <section>
                <div>
                    <footer className="text-white  bg-gray-500 body-font">
              
                        <div className="bg-white ">
                            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                                <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                                    <div className=" px-2 py-3 rounded-md">
                                        <p className="text-2xl text-black font-bold bg-blue font-mono">OLC Edukasi</p>
                                    </div>
                                </div>
                                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                    <div className="text-black">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-black">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a w-56  w-56 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-black">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3 text-black">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}
