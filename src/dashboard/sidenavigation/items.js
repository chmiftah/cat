import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'

import HomeIcon from './icons/home';
import { useToggle } from '../provider/context';

const style = {
  title: `mx-4 text-sm`,
  inactive: `text-gray-700`,
  active: `  border-l-4  border-indigo-500`,
  link: `flex items-center justify-start p-4 w-full hover:text-white`,
  close: `lg:duration-100 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all hidden `,
  open: `lg:duration-100 lg:ease-in  lg:opacity-100 lg:transition-all lg:w-auto`,
};

export default function SidenavItems() {
 
  const { pathname } = useLocation();
  const { open, toggle } = useToggle();
  return (
    <ul className="pl-2">
      <li className={` ${"/" === pathname ? style.active : style.inactive} hover:bg-gray-100`} >
        <Link to="/" className={`${style.link}`}>
          <span className="text-gray-700" onClick={toggle}><HomeIcon className="bg-gray-700" /></span>
          <span
            className={`${style.title} ${open ? style.open : style.close} text-gray-700 font-semibold text-lg`}
          > Dashboard
          </span></Link>
      </li>
      <hr className="my-2" />
{/* 
      <li className={` ${"dashboard" === pathname ? style.active : style.inactive}`}>
        <Disclosure >
          <Disclosure.Button className={`${style.link} mb-2`}>
            <span className="text-gray-700" onClick={toggle}><HomeIcon className="bg-gray-700" /></span>
            <span
              className={`${style.title} ${open ? style.open : style.close}  text-gray-700 font-semibold text-lg`}
            > Materi SKD
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className={` ${style.title} ${open ? style.open : style.close} rounded-xl  -mt-4    p-1`}>
            <div className=" m-3 ">
              <Link to="/skd/materi-teks" className="text-gray-700 font-medium flex">
                <span className="text-gray-700"><HomeIcon className="" /></span>
                <span className="text-lg pl-2 ">Materi Teks</span>
              </Link>
            </div>
            <div className=" m-3 ">
              <Link to="/skd/materi-videos" className="text-gray-700 font-medium flex">
                <span className="text-gray-700"><HomeIcon className="" /></span>
                <span className="text-lg pl-2">Materi Video</span>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </li> */}


      <li className={` ${"dashboard" === pathname ? style.active : style.inactive}`}>
        <Disclosure >
          <Disclosure.Button className={`${style.link} mb-2`}>
            <span className="text-gray-700" onClick={toggle}><HomeIcon className="bg-gray-700" /></span>
            <span
              className={`${style.title} ${open ? style.open : style.close}  text-gray-700 font-semibold text-lg`}
            > Tryouts
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className={` ${style.title} ${open ? style.open : style.close} rounded-xl  -mt-4    p-1`}>
            <div className=" m-3 ">
              <Link to="/skd/tryout" className="text-gray-700 font-medium flex">
                <span className="text-gray-700"><HomeIcon className="" /></span>
                <span className="text-lg pl-2 ">Tryout</span>
              </Link>
            </div>
            <div className=" m-3 ">
              <Link to="/skd/hasil-tryout" className="text-gray-700 font-medium flex">
                <span className="text-gray-700"><HomeIcon className="" /></span>
                <span className="text-lg pl-2">Hasil</span>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </li>
 
 





      <hr className="my-2" />
    </ul>
  );
}
