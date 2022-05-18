import Navi from "../component/navi";

function list() {
  return (
    //jsx css methoduna iyi bak
    <div className="listo">
      <Navi />
      <ul id="lis">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>

      <style global jsx>
        {`
          li {
            color: red;
            border: 1px solid red;
          }
          body {
            background-color: #b6ad90;
          }
        `}
      </style>
    </div>
  );
}
export default list;
