import Link from "next/link";
import Image from "next/image";
import logo from "../public/logom.png";

function Navi() {
  return (
    
    <div>
     <div className="logo"><Image src={logo} width={300}  height={80} /></div>
      <nav>
        <Link href={"/"}>
          <a className="hover:text-green-500">Anasayfa</a>
        </Link>
        <Link href={"/about"}>
          <a className="hover:text-green-500">Hakkımda</a>
        </Link>
        <Link href={"/list"}>
          <a className="hover:text-green-500">Liste Sayfası</a>
        </Link>
      </nav>
     <style jsx>
       {`
         .logo{
           border-bottom: 2px solid azure;
         }
       `}
     </style>
    </div>
  );
}

export default Navi;
