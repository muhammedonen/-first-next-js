import Link from "next/link";
import Image from "next/image";
import logo from "../public/logom.png";

function Navi() {
  return (
    
    <div>
     <div className="logo"><Image src={logo} width={300}  height={80} /></div>
      <nav>
        <Link href={"/"}>
          <a>Anasayfa</a>
        </Link>
        <Link href={"/about"}>
          <a>Hakkımda</a>
        </Link>
        <Link href={"/list"}>
          <a>Liste Sayfası</a>
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
