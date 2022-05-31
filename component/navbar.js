import Image from "next/image";
import logo from "../public/logom.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-around border-b-4  border-red-300 mt-3 align-middle">
     
      <Image className="float-left" src={logo} width={200}  height={80} />
      <div className="">
      <nav className="font-bold text-lime-200">
        <Link href={"/"}>
          <a className="hover:text-green-500 ">Anasayfa</a>
        </Link>
        <Link href={"/about"}>
          <a className="hover:text-green-500 ml-8">Hakkımda</a>
        </Link>
        <Link href={"/list"}>
          <a className="hover:text-green-500 ml-8">Liste Sayfası</a>
        </Link>
      </nav>
      </div>
      </div>
     
  
  );
}
export default Navbar;