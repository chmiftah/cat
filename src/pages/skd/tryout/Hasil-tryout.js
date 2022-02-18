import React from 'react'

export default function Hasil() {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="p-4">
                    <p className="text-4xl font-semibold">Hasil Tryout SKD CPNS</p>
                    <p className="font-light mt-1 text-sm text-gray-700">Berikut ini hasil tryout SKD CPNS</p>
                </div>
                <hr />
                <div className="overflow-x-auto">
                    <table class="table-auto border w-full">
                        <thead className="border">
                            <tr>
                                <th className="border-2 text-left px-2 ">No.</th>
                                <th className="border-2 text-left px-2">Tryout</th>
                                <th className="border-2 text-left px-2">Tanggal</th>
                                <th className="border-2 text-left px-2">Skor TWK</th>
                                <th className="border-2 text-left px-2">Skor TIU</th>
                                <th className="border-2 text-left px-2">SKor TKP</th>
                                <th className="border-2 text-left px-2">Skor Akhir</th>
                                <th className="border-2 text-left px-2">Lulus</th>
                                <th className="border-2 text-left px-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-2 text-left px-2">
                                <td className="border-2 text-left px-2">1</td>
                                <td className="border-2 text-left px-2">Adam</td>
                                <td className="border-2 text-left px-2">858</td>
                            </tr>
                    
                      
                        </tbody>
                    </table>
                </div>





            </div>
        </div>
    )
}
