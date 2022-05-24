import Layout from "../component/layout";

function HomePage() {
  return (
    <Layout>
      <small>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </small>
      <style global jsx>
        {`
          small {
            font-weight: bold;
            color: azure;
            border:1px solid azure;
            padding:5px;
          }
        `}
      </style>
    </Layout>
  );
}

export default HomePage;
