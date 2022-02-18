import { EyeIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import hero from '../hero.png'
import { Link, useLocation } from 'react-router-dom';
export default function Register() {
    const [type, setType] = useState(true)
    const change = () => {
        type ? setType(false) : setType(true)
    }
    
    return (
        <div>
            <div className="flex min-h-screen">
                <div className="hidden lg:block lg:w-1/2 p-12 " style={{ backgroundColor: '#3b6ebb' }}>
                    <div className="flex justify-center items-center w-full py-20">
                        <div>
                            <p className="text-white font-Rubik text-4xl text-center">Penerimaan Seleksi ASN akan segera dimulai</p>
                            <p className="text-yellow-400 font-Rubik text-3xl text-center mt-4">Persiapkan dirimu sekarang juga!</p>
                            <div className="flex justify-center items-center mt-12">
                                <img src={hero} alt="" className="w-3/4" />
                            </div>
                            <p className="text-white font-Rubik text-lg mt-24 text-center">Uji kesiapanmu menghadapi Seleksi CPNS dan Sekolah Kedinasan bersama SekolahASN.<br /> Daftarkan dirimu dan jadilah yang Terbaik di setiap Try Out yang ada</p>
                        </div>

                    </div>
                </div>
                <div className="lg:w-1/2 py-5">
                    <div className="flex h-screen  items-center content-center justify-center">
                        <div className="  px-20">
                            <p className="text-4xl font-Rubik mb-2 text-gray-600  ">Lengkapi Profile Kamu</p>
                            <p className=" mb-5 font-thin text-gray-700">Selesaikan pendaftaran kamu dengan melengkapi data dibawah ini</p>
                            <div className="">
                                <form>
                                <div className="mt-4">
                                        <label className=" font-Rubik  text-gray-800" htmlFor="email">Nama Lengkap</label>
                                        <input type="text" placeholder="your name" className="px-4 py-2 border-2 border-gray-400  rounded-lg w-full mt-1 focus:outline-none" />
                                    </div>

                                    <div className="mt-4">
                                        <label className=" font-Rubik  text-gray-800" htmlFor="email">Email</label>
                                        <input type="email" placeholder="your@mail.com" className="px-4 py-2 border-2 border-gray-400  rounded-lg w-full mt-1 focus:outline-none" />
                                    </div>

                                    <div className="mt-4">
                                        <label className=" font-Rubik  text-gray-800" htmlFor="email">No. Hp</label>
                                        <input type="email" placeholder="082.." className="px-4 py-2 border-2 border-gray-400  rounded-lg w-full mt-1 focus:outline-none" />
                                    </div>


                                    <div className="mt-4">
                                        <label className=" font-Rubik  text-gray-800" htmlFor="email">Password</label>
                                        <input type={type ? 'password' : 'text'} placeholder="password" className="pl-4 pr-12 py-2 border-2 border-gray-400  rounded-lg w-full mt-1 focus:outline-none" />
                                        <span className="relative"><EyeIcon className="text-gray-400 w-6 rounded-sm absolute top-1 -left-8" onClick={change} /></span>
                                    </div>

                                    <div className="mt-8">
                                        <button className="bg-blue-600 w-full p-3 text-white font-Rubik rounded-xl">Masuk</button>

                                    </div>

                                </form>
                                {/* <div className="w-full my-6">
                                    <p className="text-blue-500 font-thin">Lupa Password ?</p>
                                </div> */}
                                <hr />
                                <div className="w-full my-4">
                                    <Link to="/login" className="font-rubik">Sudah Punya Akun?. <span className="text-blue-500  font-Rubik"> Masuk Disini</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
