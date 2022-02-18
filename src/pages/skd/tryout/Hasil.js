import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, XIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { Tab } from '@headlessui/react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafik',
        },
    },
};
const labels = [''];
export const data = {
    labels,
    datasets: [
        {
            label: 'TIU',
            data: [
                        10,
                     
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'TWK',
            data: [
                       
                        20,
                     
            ],
            backgroundColor: 'rgba(155, 10, 132, 0.5)',
        },
        {
            label: 'TKP',
            data: [
                       
                        30,
            ],
            backgroundColor: 'rgba(255, 99, 10, 0.5)',
        },
  
    ],
};
export default function HasilId() {

    const [dataExam, setDataExam] = useState([]);
    const [indexNumber, setIndexNumber] = useState(0)
    const { option, question } = dataExam[indexNumber] || {}
    const [tiu, setTiu] = useState()
    const [twk, setTwk] = useState()
    const [tkp, setTkp] = useState()


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );


   


    const nextHandler = () => {

        if (dataExam.length - 1 === indexNumber) return;
        setIndexNumber(indexNumber + 1)

    }

    const prevHandler = () => {
        if (indexNumber === 0) return;
        setIndexNumber(indexNumber - 1)

    }



    useEffect(() => {

        const getData = async () => {
            let { data } = await axios.get(`http://localhost:8000/api/exam/result/335`)
            setDataExam(data.data.exam)
            setTiu(data.data.tiu)
            setTkp(data.data.tkp)
            setTwk(data.data.tkp)
        }
        getData()
    }, [])
    console.log('twk',twk);


    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="p-4">
                    <p className="text-4xl font-semibold">Hasil Tryout SKD CPNS</p>
                    <p className="font-light mt-1 text-sm text-gray-700">Berikut ini hasil tryout SKD CPNS</p>
                </div>
                <hr />
                <div className="overflow-x-auto">
                    <div className="p-4 my-2">
                        <div className="flex  border-b-2 py-3 ">
                            <div className="w-1/4">
                                <p className="font-semibold text-gray-500 text-xl">Tryout</p>
                            </div>
                            <div>
                                <p className="font-light text-lg text-gray-500">Tryout SKD 1</p>
                            </div>
                        </div>
                        <div className="flex  border-b-2 py-3 ">
                            <div className="w-1/4">
                                <p className="font-semibold text-gray-500 text-xl">Waktu</p>
                            </div>
                            <div>
                                <p className="font-light text-lg text-gray-500">100 Menit</p>
                            </div>
                        </div>
                        <div className="flex border-b-2 py-3 ">
                            <div className="w-1/4">
                                <p className="font-semibold text-gray-500 text-xl">Jumlah Soal</p>
                            </div>
                            <div>
                                <p className="font-light text-lg text-gray-500">110 Soal</p>
                            </div>
                        </div>

                        <div >



                        </div>
                    </div>
                </div>
                <Tab.Group>
                    <Tab.List className="flex space-x-4 px-2">
                        <Tab className={({ selected }) =>
                            selected ? 'bg-indigo-500 border border-white text-white px-5 py-4 rounded-lg' : 'bg-white text-indigo-500 px-5 py-4 border-2 border-indigo-500 rounded-lg'
                        }>STATISTIK</Tab>
                        <Tab className={({ selected }) =>
                            selected ? 'bg-indigo-500 border border-white text-white px-5 py-4 rounded-lg' : 'bg-white text-indigo-500 px-5 py-4 border-2 border-indigo-500 rounded-lg'
                        }>PEMBAHASAN</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="">
                                <div className="lg:flex  p-4 lg:space-x-8">
                                    <div className="lg:w-1/3 p-8 shadow-xl text-center space-y-6 rounded-xl">
                                        <div className="space-y-2">
                                            <p className="text-2xl">SKOR AKHIR</p>
                                            <p className="text-3xl font-bold">{tiu + twk + tkp}</p>
                                            <p className="text-2xl  font-thin">dari 550</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl mb-3">Keterangan</p>
                                            <span className="bg-green-400 px-2 rounded-md text-white font-thin">LULUS</span>
                                        </div>
                                    </div>
                                    <div className=" lg:w-1/3  p-8 shadow-xl text-center space-y-6 rounded-xl">
                                        <div className="">
                                            <p className="text-2xl mb-2">HASIL</p>
                                            <p><span className="text-lg font-semibold text-gray-600">TWK = </span><span className="text-xl font-semibold text-green-500">{twk}</span></p>
                                            <p><span className="text-lg font-semibold text-gray-600">TIU = </span><span className="text-xl font-semibold text-green-500">{tiu}</span></p>
                                            <p><span className="text-lg font-semibold text-gray-600">TKP = </span><span className="text-xl font-semibold text-green-500">{tkp}</span></p>
                                        </div>
                                        <div className="">
                                            <p className="text-2xl mb-2">Passing Grade</p>
                                            <p><span className="text-lg font-semibold text-gray-600">TWK = </span><span className="text-xl font-semibold text-green-500">65</span></p>
                                            <p><span className="text-lg font-semibold text-gray-600">TIU = </span><span className="text-xl font-semibold text-green-500">80</span></p>
                                            <p><span className="text-lg font-semibold text-gray-600">TKP = </span><span className="text-xl font-semibold text-green-500">TKP</span></p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3  p-8 shadow-xl text-center space-y-6 rounded-xl ">
                                        <Bar options={options} data={data} className="w-1/3" />
                                    </div>
                                </div>
                            </div>

                        </Tab.Panel>
                        <Tab.Panel>
                            <div className="">
                                <div className="lg:flex my-4 lg:space-x-6  ">
                                    <div className="w-full md:w-full lg:w-full xl:w-3/4 ">
                                        <div className="border-1 border shadow-lg rounded-xl">
                                            {
                                                dataExam.length < 1 ? (
                                                    <div>
                                                        loading
                                                    </div>
                                                ) :
                                                    (
                                                        <div>
                                                            <div className="p-6">
                                                                <p className="text-2xl font-semibold text-gray-600">Soal No. {indexNumber + 1}
                                                                    {
                                                                        option.find(
                                                                            (option) => option.correct && option.selected === option.correct
                                                                        ) ? (
                                                                            <span className="px-2 text-lg bg-green-400 mx-4 rounded-md text-white">BENAR</span>
                                                                        ) :
                                                                            (
                                                                                <span className="px-2 text-lg bg-red-400 mx-4 rounded-md text-white">SALAH</span>
                                                                            )
                                                                    }
                                                                </p>
                                                            </div>
                                                            <hr />
                                                            <div className="p-6">
                                                                <p className="text-xl font-medium text-gray-700">{question}</p>
                                                            </div>
                                                            <div className=" px-6 pb-12 ">
                                                                <div>
                                                                </div>

                                                                {
                                                                    option.map((item, index) => (
                                                                        <div>
                                                                            <div className="" style={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                marginBottom: 8,
                                                                            }}
                                                                                key={index}
                                                                            >
                                                                                <div style={{
                                                                                    width: 22,
                                                                                    height: 22,
                                                                                    borderRadius: 100,
                                                                                    borderWidth: 2,
                                                                                    borderColor: 'gray',
                                                                                    cursor: 'pointer',
                                                                                    marginRight: 10,
                                                                                    backgroundColor: item?.selected ? 'greenYellow' : 'transparent',
                                                                                }}>
                                                                                </div>
                                                                                <div className="" style={{
                                                                                    fontSize: 18
                                                                                }}
                                                                                >
                                                                                    {item?.correct ? <div>
                                                                                        <p className=" text-xl font-medium text-blue-600 flex items-center space-x-2"><span>{item.title}</span> <span><CheckIcon className="w-6 text-blue-500" /></span></p>
                                                                                    </div> : <div>
                                                                                        <p style={{ color: item?.selected ? 'red' : '', }} className="space-x-2 flex items-center text-xl font-medium text-gray-600"><span>{item.title}</span>
                                                                                            {item?.selected ? <span><XIcon className="w-6 text-red-500" /></span> : ''}
                                                                                        </p>
                                                                                    </div>}
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    ))
                                                                }

                                                            </div>

                                                        </div>
                                                    )
                                            }
                                        </div>
                                        <div className=" my-4 py-4">
                                            {dataExam.length < 1 ? (
                                                <div>
                                                    loading
                                                </div>
                                            ) :

                                                <div className=" border  p-4 rounded-lg shadow-xl">
                                                    <div>
                                                        <p className="text-2xl font-semibold mb-2 text-gray-600">Pembahasan</p>
                                                        <hr />
                                                    </div>
                                                    <p className="text-md mt-4">Jawaban Benar : {option.find((item) => item.correct).title}</p>
                                                    <p className="text-md">Pembahasan : </p>
                                                    <span className="text-md font-thin">  {
                                                        option.find((item) => item.correct).pembahasan
                                                    }</span>

                                                </div>
                                            }
                                        </div>

                                        <div>
                                            <div className=" w-full flex my-6">
                                                <div className=" mx-auto pb-2 flex space-x-6">
                                                    <button
                                                        disabled={indexNumber === 0 ? true : false}
                                                        className="bg-gray-400 bg-opacity-60 px-4 py-2 rounded-lg hover:bg-opacity-100 text-white flex space-x-2 items-center"
                                                        onClick={prevHandler}>
                                                        <span><ArrowLeftIcon className="w-6" /></span>
                                                        <span>Sebelumnya</span>
                                                    </button>

                                                    <button
                                                        disabled={dataExam.length - 1 === indexNumber ? true : false}
                                                        className="bg-indigo-500 flex  px-4 py-3 rounded-lg hover:bg-opacity-50 text-white space-x-2 items-center"
                                                        onClick={nextHandler}><span>Selanjutnya</span>
                                                        <span><ArrowRightIcon className="w-6" /></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Navigation */}

                                    <div className="  p-3  border-t-2  shadow-lg rounded-xl">
                                        <div className="p-5">
                                            <p className="text-2xl mb-4 font-semibold text-gray-600">Navigasi Soal</p>
                                            <hr />
                                        </div>
                                        <div className="grid grid-flow-col px-4  ">

                                            {
                                                dataExam.map((item, index) => (
                                                    <div className="border border-primary"
                                                        key={index}
                                                        style={{
                                                            cursor: 'pointer',
                                                            display: "flex",
                                                            width: 40,
                                                            height: 40,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            margin: 6,
                                                            borderRadius: 5,

                                                            backgroundColor:
                                                                index === indexNumber
                                                                    ? "greenYellow" :
                                                                    item?.correct
                                                                        ? "yellow"
                                                                        : "transparent"
                                                        }}
                                                        onClick={() => setIndexNumber(index)}
                                                    >
                                                        {
                                                            item.option.find(
                                                                (option) => option.correct && option.selected === option.correct
                                                            ) ?
                                                                <div className="bg-green-400 py-2 px-4 rounded-lg">
                                                                    {index + 1}
                                                                </div>
                                                                :
                                                                <div>
                                                                    <div className="bg-red-500 py-2 px-4 rounded-lg">
                                                                        {index + 1}
                                                                    </div>
                                                                </div>

                                                        }
                                                    </div>
                                                ))
                                            }

                                        </div>

                                        <div className="p-5">
                                            <div>
                                                <p>Keterangan</p>
                                                <div className="space-x-3 my-3"> <span className=" px-4 rounded-lg bg-red-500"></span> <span className="text-gray-500 text-lg">Jawaban Salah</span></div>
                                                <div className="space-x-3"><span className=" px-4 rounded-lg bg-green-500"></span> <span className="text-gray-500 text-lg">Jawaban Benar</span></div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>






            </div>
        </div>
    )
}
