import Navi from "../component/navi";

function list() {
  return (
    //jsx css methoduna iyi bak
    <div className="listo">
      <Navi />
      <ul id="lis">
        <li>musab</li>
        <li>lokman</li>
        <li>musa</li>
        <li>nesibe</li>
      </ul>

      <style global jsx>
        {`
          li {
            color: red;
            background-color: black;
          }
          body {
            background-color: green;
          }
        `}
      </style>
    </div>
  );
}
export default list;
