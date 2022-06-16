import Layout from "../component/layout";

function proje({veri,name,subject}) {
  return (
    <Layout>
     <div className="h-120  flex  flex-wrap justify-around items-center text-white ">
        <div className="flex text-center bg-gray-700 p-3 rounded-lg border-2">
          <h3 className="text-3xl">{subject}</h3>
          <span className="text-3xl underline text-red-500"><a href="https://jsonplaceholder.typicode.com/users"> {name}</a> </span>
          </div>
     {veri.map(e =>(

      <div key={e.id} className="w-60 text-center border-2 m-2 p-2 rounded-lg shadow-md shadow-yellow-300" >
        <h3 className="text-lg text-red-500 font-semibold p-2">{e.name}</h3>
        <p>{e.email}</p>
        <span className="bg-gray-400 border-2 text-center border-yellow-400 text-blue-700 rounded-lg "><b className="font-bold">City :</b> {e.address['city']}</span>
      </div>
     ))}
     </div>
    </Layout>
  );
}
export default proje;
export const getStaticProps = async ()=>{
  const subject = "Subject =>"
  const name = "getStaticProps"
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 const data = await res.json();
 return{
  props: {
    veri: data,name,subject

  }
}
}