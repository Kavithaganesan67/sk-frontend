import logo from '../assets/logo.png';

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <img src={logo} alt="SKart Logo" className="w-32 h-32 animate-pulse" />
    </div>
  );
}