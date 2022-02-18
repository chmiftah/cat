import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Tryout() {
    return (
        <div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="p-4">
                    <p className="text-4xl font-sans font-semibold">Tryouts </p>
                    <p className="m-1 text-md font-extralight text-gray-600">Berikut daftar Tryout Yang Tersedia</p>
                </div>
                <hr />

     <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-6">
         <div className="p-6 border border-gray-100 shadow-xl drop-shadow-xl transition-shadow">
             <p className="text-2xl font-bold my-2 text-indigo-500 font-sans">Tryout SKD 1</p>
             <p className="text-md font-light">Jumlah Soal : 110 </p>
             <p className="font-sans font-light text-md text-gray-700">Waktu : 120 menit</p>

             <div className="my-4">
                 <Link to="/tryout/1" className="p-4 w-full block text-center bg-indigo-600 text-white opacity-50 hover:opacity-100 text-md hover:bg-indigo-500">Kerjakan Soal</Link>
                 <button className="p-4 w-full bg-indigo-500 text-white my-2 hover:bg-opacity-50">Daftar Nilai</button>

             </div>
         </div>
         <div className="p-6 border border-gray-100 shadow-xl drop-shadow-xl transition-shadow">
             <p className="text-2xl font-bold my-2 text-indigo-500 font-sans">Tryout SKD 1</p>
             <p className="text-md font-light">Jumlah Soal : 110 </p>
             <p className="font-sans font-light text-md text-gray-700">Waktu : 120 menit</p>

             <div className="my-4">
                 <button className="p-4 w-full bg-indigo-600 text-white opacity-50 hover:opacity-100 text-md hover:bg-indigo-500">Kerjakan Soal</button>
                 <button className="p-4 w-full bg-indigo-500 text-white my-2 hover:bg-opacity-50">Daftar Nilai</button>

             </div>
         </div>
         <div className="p-6 border border-gray-100 shadow-xl drop-shadow-xl transition-shadow">
             <p className="text-2xl font-bold my-2 text-indigo-500 font-sans">Tryout SKD 1</p>
             <p className="text-md font-light">Jumlah Soal : 110 </p>
             <p className="font-sans font-light text-md text-gray-700">Waktu : 120 menit</p>

             <div className="my-4">
                 <button className="p-4 w-full bg-indigo-600 text-white opacity-50 hover:opacity-100 text-md hover:bg-indigo-500">Kerjakan Soal</button>
                 <button className="p-4 w-full bg-indigo-500 text-white my-2 hover:bg-opacity-50">Daftar Nilai</button>

             </div>
         </div>
         <div className="p-6 border border-gray-100 shadow-xl drop-shadow-xl transition-shadow">
             <p className="text-2xl font-bold my-2 text-indigo-500 font-sans">Tryout SKD 1</p>
             <p className="text-md font-light">Jumlah Soal : 110 </p>
             <p className="font-sans font-light text-md text-gray-700">Waktu : 120 menit</p>

             <div className="my-4">
                 <button className="p-4 w-full bg-indigo-600 text-white opacity-50 hover:opacity-100 text-md hover:bg-indigo-500">Kerjakan Soal</button>
                 <button className="p-4 w-full bg-indigo-500 text-white my-2 hover:bg-opacity-50">Daftar Nilai</button>

             </div>
         </div>
     </div>





            </div>
        </div>
    )
}
