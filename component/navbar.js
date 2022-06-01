import Image from "next/image";
import logo from "../public/logom.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-evenly  align-middle font-bold text-lime-200 m-3 border-b-2">
    
    <Image className="float-left" href={"/"} src={logo} width={100}  height={30} />
      
        <Link href={"/"}>
          <a className="hover:text-green-500 ">Anasayfa</a>
        </Link>
        <Link href={"/about"}>
          <a className="hover:text-green-500 ml-8">Hakkımda</a>
        </Link>
        <Link href={"/proje"}>
          <a className="hover:text-green-500 ml-8">Projeler</a>
        </Link>
        <Link href={"/iletisim"}>
          <a className="hover:text-green-500 ml-8">İletişim</a>
        </Link>
      </div>
      
     
  
  );
}
export default Navbar;