import { ArrowLeftIcon, ArrowRightIcon, ClockIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';
import { useTimer } from 'react-timer-hook';

export default function TryoutTes() {

    const [open, setOPen] = useState(false)
    const [indexNumber, setIndexNumber] = useState(0)
    const [dataExam, setDataExam] = useState([])
    const { option, question } = dataExam[indexNumber] || []
    const [score] = useState([])
    const [total, setTotal] = useState([])
    const resume = JSON.stringify(dataExam)
    const scores = JSON.stringify(total)
    const history = useHistory()
    const [time, setTime] = useState(Date.now() + 100000)

    function MyTimer({ expiryTimestamp }) {
        const {
            seconds,
            minutes,
            hours,
        } = useTimer({ expiryTimestamp, onExpire: () => finish(), autoStart: open });
        return (
            <div>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        );
    }

    const finish = async () => {
        dataExam.filter((item) => item.selected).filter((item) =>
            score.splice((item.option.find((item) => item.selected).value))
        )
        dataExam.filter((item) => item.selected).filter((item) =>
            score.push((item.option.find((item) => item.selected).value))
        )
        var scores = score.reduce((a, v) => a = a + v, 0)
        var twk = (calc(score, 0, 2));
        var tiu = (calc(score, 3, 5));
        var tkp = (calc(score, 6, 7));

        axios.get('/sanctum/csrf-cookie');
        axios.post(`http://localhost:8000/api/exam/store`, { resume, scores, tiu, twk, tkp });

        setTimeout(() => {
            localStorage.clear()
            history.push('/skd/hasil-tryout');
        }, 1000);
    }

    const ready = () => {
        Swal.fire({
            title: 'Yakin Mulai Mengerjakan?',
            text: 'Pastikan koneksi internet anda bagus! dan Gunakan Browser Terbaru ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Saya Siap'
        }).then((result) => {
            if (result.isConfirmed) {
                setOPen(true)
                getData()
            }
        })
    }

    const getData = async () => {
        try {
            let { data } = await axios.get('http://localhost:8000/api/ujian/aa');
            setDataExam(data.data)
        } catch (error) {
        }
    }

    const nextHandler = () => {
        if (dataExam.length - 1 === indexNumber) return;
        setIndexNumber(indexNumber + 1)
    }

    const prevHandler = () => {
        if (indexNumber === 0) return;
        setIndexNumber(indexNumber - 1)
    }

    const selectOption = (indexSelected, indexOptionSelected, value) => {
        setDataExam
            (dataExam.map((item, index) =>
                index === indexSelected
                    ? {
                        ...item,
                        selected: 1,
                        option: option.map((item, index) =>
                            index === indexOptionSelected
                                ? { ...item, selected: 1 }
                                : { ...item, selected: 0 }
                        ),
                    } : item
            ))
    }

    function calc(score, i1, i2) {
        let result = 0;
        score.slice(i1, (i2 + 1)).forEach(element => {
            result += element;
        });
        return result;
    }

    const getScore = async () => {
        dataExam.filter((item) => item.selected).filter((item) =>
            score.splice((item.option.find((item) => item.selected).value))
        )
        dataExam.filter((item) => item.selected).filter((item) =>
            score.push((item.option.find((item) => item.selected).value))
        )

        Swal.fire({
            title: 'Yakin Anda Ingin Mengkhiri Ujian?',
            text: 'Pastikan koneksi internet anda bagus! dan Gunakan Browser Terbaru ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Saya yakin!'
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    var scores = score.reduce((a, v) => a = a + v, 0)
                    var twk = (calc(score, 0, 2));
                    var tiu = (calc(score, 3, 5));
                    var tkp = (calc(score, 6, 7));

                    await axios.get('/sanctum/csrf-cookie');
                    await axios.post(`http://localhost:8000/api/exam/store`, { resume, scores, tiu, twk, tkp });
                    alert('sukses')
                    localStorage.clear()
                    history.push('/skd/hasil-tryout');
                } catch (error) {
                    alert('gagal')
                }
            }
        })
    }

    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#';
            window.location.reload();
        }
    }

    useEffect(() => {
        const update = window.localStorage.getItem('open');
        setOPen(JSON.parse(update))

        const dataExam = window.localStorage.getItem('dataExam');
        setDataExam(JSON.parse(dataExam))

        const time = window.localStorage.getItem('times');
        setTime(JSON.parse(time))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('times', time);
        window.localStorage.setItem('open', open);
        window.localStorage.setItem('dataExam', JSON.stringify(dataExam));

    }, [open, dataExam, total, scores, time])

    return (
        <div>
            <div className={`${open ? 'hidden' : 'block'}`}>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="p-4">
                        <p className="text-4xl font-sans font-semibold">Persiapan</p>
                        <p className="m-1 text-md font-extralight text-gray-600">Siapkan dirimu untuk mengerjakan Tryout!</p>
                    </div>
                    <hr />
                    <div className="p-4 my-6">

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
                        <div className="flex py-3 ">
                            <div className="w-1/4">
                                <p className="font-semibold text-gray-500 text-xl">Passing Grade</p>
                            </div>
                            <div>
                                <p className="font-light text-lg text-gray-500">
                                    <li>TIU : 80</li>
                                    <li>TWK : 65</li>
                                    <li>TKP : 166</li>
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="border bg-green-300 bg-opacity-60 rounded-xl p-4">

                                <ol className="text-2xl font-semibold text-gray-600">Perhatian</ol>
                                <li className="text-md font-light text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea delectus temporibus natus deleniti illo dolores, dolore eligendi,</li>
                                <li className="text-md font-light text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde voluptates esse aperiam, distinctio repudiandae placeat </li>
                                <li className="text-md font-light text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea delectus temporibus natus deleniti illo dolores, dolore eligendi,</li>
                                <li className="text-md font-light text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde voluptates esse aperiam, distinctio repudiandae placeat </li>

                            </div>

                        </div>
                        <div className="mt-6 flex space-x-6">
                            <button className="bg-indigo-500 bg-opacity-60 px-4 py-3 hover:bg-opacity-100 text-white" onClick={ready}>Kerjakan Sekarang</button>
                            <button className="bg-indigo-500  px-8 py-3 hover:bg-opacity-50 text-white">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${open ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="p-4 lg:flex justify-between items-center">
                        <div>
                            <p className="text-3xl font-sans font-semibold">Tryout - Tryout SKD  1</p>
                        </div>
                        <div>
                            <div className=" w-1/2 flex justify-between mx-2 space-x-2">
                                <div className="flex border-b-4 items-center border-indigo-500 p-2 space-x-4">
                                    <span><ClockIcon className="w-10 text-gray-500" /></span>
                                    <span id="timer" className="text-3xl  text-gray-500">
                                        <MyTimer expiryTimestamp={time} />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr />

                    <div className="lg:flex my-12 lg:space-x-6">
                        <div className="lg:w-3/4  border-1 border-gray-50 shadow-lg rounded-xl">
                            <div>
                                {
                                    dataExam.length < 1 ? (
                                        <div>
                                            loading
                                        </div>
                                    ) :
                                        (
                                            <div>
                                                <div className="p-6">
                                                    <p className="text-2xl font-semibold text-gray-600">Soal No. {indexNumber + 1}</p>
                                                </div>
                                                <hr />
                                                <div className="p-6">
                                                    <p className="text-xl font-medium text-gray-700">{question}</p>
                                                </div>
                                                <div className=" px-6 ">
                                                    {
                                                        option.map((item, index) => (
                                                            <div>
                                                                <div className="" style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: 8,
                                                                }}
                                                                    key={index}
                                                                    onClick={() => selectOption(indexNumber, index,)}
                                                                >
                                                                    <div style={{
                                                                        width: 22,
                                                                        height: 22,
                                                                        borderRadius: 100,
                                                                        borderWidth: 2,
                                                                        borderColor: 'gray',
                                                                        cursor: 'pointer',
                                                                        marginRight: 10,
                                                                        backgroundColor: item?.selected ? 'greenyellow' : 'transparent',
                                                                    }}>
                                                                    </div>

                                                                    <div className="" style={{
                                                                        fontSize: 18
                                                                    }}
                                                                    >
                                                                        <p className=" text-xl font-medium text-gray-600">{item.title}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                    <div className="my-12" />
                                                    <hr />
                                                    <div className=" w-full flex my-6">
                                                        <div className=" mx-auto pb-12 flex space-x-6">
                                                            <button
                                                                disabled={indexNumber === 0 ? true : false}
                                                                className="bg-gray-500 rounded-lg bg-opacity-60 px-4 py-3 hover:bg-opacity-100 text-white flex space-x-2 items-center"
                                                                onClick={prevHandler}>
                                                                <span><ArrowLeftIcon className="w-6" /></span>
                                                                <span>Sebelumnya</span>
                                                            </button>

                                                            <button
                                                                disabled={dataExam.length - 1 === indexNumber ? true : false}
                                                                className="bg-indigo-500 rounded-lg flex  px-4 py-3 hover:bg-opacity-50 text-white space-x-2 items-center"
                                                                onClick={nextHandler}><span>Selanjutnya</span>
                                                                <span><ArrowRightIcon className="w-6" /></span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        <div className="p-3  border-1 border-gray-50 shadow-lg rounded-xl">
                            <div className="p-5">
                                <p className="text-2xl mb-4 font-semibold text-gray-600">Navigasi Soal</p>
                                <hr />
                            </div>
                            <div className="grid grid-flow-col px-4">

                                {
                                    dataExam.length < 1 ? (
                                        <div>
                                            loading
                                        </div>
                                    ) :
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
                                                            item?.selected
                                                                ? "yellow"
                                                                : "transparent"
                                                }}
                                                onClick={() => setIndexNumber(index)}
                                            >
                                                {index + 1}
                                                {item.option.id}
                                            </div>
                                        ))
                                }

                            </div>
                            <div className="p-5">
                                <div>
                                    <p>Keterangan</p>
                                    <div className="space-x-3 my-3"> <span style={{ backgroundColor: 'greenyellow' }} className=" px-4 rounded-lg bg-red-500"></span> <span className="text-gray-700">Posisi Soal</span></div>
                                    <div className="space-x-3 mb-4"><span style={{ backgroundColor: 'yellow' }} className=" px-4 rounded-lg bg-green-500 mb-2"></span> <span className="text-gray-700">Sudah Dikerjakan</span></div>
                                    <div className="space-x-3"><span className=" px-4 rounded-lg border-2 border-gray-300"></span> <span className="text-gray-700">Belum Dikerjakan</span></div>
                                </div>
                            </div>

                            <div className=" w-full flex my-12">
                                <div className=" mx-auto space-x-6">
                                    <button className="bg-gray-500 bg-opacity-60 px-4 py-3 hover:bg-opacity-100 text-white">Batal</button>
                                    <button
                                        onClick={getScore}
                                        className="bg-red-500  px-4 py-3 hover:bg-opacity-50 text-white">Selesai</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
