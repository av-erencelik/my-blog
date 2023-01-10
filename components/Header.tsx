import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src={logo} width={50} height={50} alt="logo" className="rounded-full"></Image>
        </Link>
        <h1 className=" text-black-900">Yazılımcı Avukat</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-cyan-300 flex items-center rounded-full text-center"
        >
          Kişisel Websitem
        </Link>
      </div>
    </header>
  );
};

export default Header;
