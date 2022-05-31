import Navbar from "./navbar";


function Layout({ children }) {
  return (
    <div className="">
      <Navbar/>
      <main className="">{children}</main>
    </div>
  );
}
export default Layout;
