import Image from "next/image";
import next1 from "../public/next1.jpeg";
import next2 from "../public/next2.jpeg"
import next3 from "../public/next3.jpg"
import next4 from "../public/next4.webp";


function Card() {
  return   <div className="flex justify-evenly font-bold flex-wrap text-green-500 h-36 mt-2 items-center ">
  <div className="rounded-md border-2 w-24 h-24 text-center hover:animate-bounce">
    <Image href={"/"} src={next1} width={96} height={96}></Image>
  </div>
  <div className="rounded-md border-2 w-24 h-24 text-center hover:animate-spin ">
    <Image href={"/"} src={next2} width={96} height={96}></Image></div>
  <div className="rounded-md border-2 w-24 h-24 text-center hover:animate-ping ">
    <Image href={"/"} src={next3} width={96} height={96}></Image></div>
  <div className="rounded-md border-2 w-24 h-24 text-center hover:animate-pulse ">
    <Image href={"/"} src={next4} width={96} height={96}></Image></div>
</div>
}


export default Card;