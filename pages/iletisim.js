import Layout from "../component/layout";

function iletisim() {
  return (
    <Layout>
      <div className="container flex justify-center">
        <form>
          <h2 className="text-center text-2xl font-bold text-blue-500">Form</h2>
          <div className="grid grid-rows-3">
            <label className="font-bold mr-1 text-yellow-50">İSİM:</label>
            <input  type="text" className="form-input w-64 h-6 p-0 rounded-md"  name="todo"  id="todo"  />
            <label className="font-bold mr-1 text-yellow-50">EMAİL:</label>
            <input  type="email" className="form-input w-64 h-6 p-0 rounded-md"  name="todo"  id="todo"  />
          </div>
        </form>
      </div>
    </Layout>
  );
}
export default iletisim;
