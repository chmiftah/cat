import SidenavItems from './items';
import SidenavHeader from './header';
import css from './style.module.css';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0 ',
    right: 'right-0 lg:left-0',
  },
  container: `pb-32 lg:pb-12 `,
  close: `duration-700 ease-out hidden transition-all lg:w-24 md:hidden`,
  default: `bg-white order shadow-2xl h-screen overflow-y-auto top-0 lg:block md:block block  `,
  open: `duration-500 ease-in transition-all w-64 z-40 sm:w-6/12 md:w-64 absolute lg:relative`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems  />
      </div>
    </aside>
  );
}
