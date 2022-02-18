import { useToggle } from '../provider/context';
const style = {
  close: ``,
  open: `w-3/4 `,
};
export default function SidenavHeader() {
  const { open} = useToggle();

  return (
  
    <div className="bg-white flex h-20 items-center justify-center mb-6 sticky top-0 z-10 p-4 border-b">
      <img src="https://ayocpns.com/belajar/img/logolightayocpns.940e15b3.png" className={`${open ? style.open : style.close} `} alt="Enoch Ndika" />
    </div>
  );
}
