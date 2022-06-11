import Layout from "../component/layout";

function proje({name,ders}) {
  return (
    <Layout>
     <div className="h-32 text-lg font-semibold  flex justify-center items-center text-white">
     
     <span className="font-bold text-white ">{name}</span>
     <span className="font-bold text-red-400 underline ml-1">{ders}</span>
     </div>
    </Layout>
  );
}
export default proje;
export const getStaticProps = async ()=>{
 const name = "Öğrenilen konu =>";
 const ders = " getStaticProps";

 return{
  props: {
    name,
    ders

  }
}
}