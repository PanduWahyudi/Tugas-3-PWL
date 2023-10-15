import Layout from "../Components/layout";

const beranda = () => {
  return (
    <Layout>
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4"> Welcome Friends</h1>
        <p className="text-2xl font-bold mb-4">
          Get random facts on the about page or if you are interested in
          me<br/>contact me on the contact page
        </p>
        <h1 className="text-4xl font-bold mb-4"> Thank you for visiting me</h1>
      </div>
    </Layout>
  );
};

export default beranda;
