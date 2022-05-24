import Navi from "./navi";
function Layout({ children }) {
  return (
    <div>
      <Navi />
      <main>{children}</main>
    </div>
  );
}
export default Layout;
