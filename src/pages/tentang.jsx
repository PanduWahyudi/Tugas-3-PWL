import { useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";

const Tentang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://api.api-ninjas.com/v1/facts", {
        headers: { "X-Api-Key": "Vf7iUOgI4CRc8RQvx1sdOw==M7wi4OKCq8ufEvDo" },
      })
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };
  return (
    <Layout>
      <div className="bg-white w-[60%] p-5 rounded-lg h-[20rem] text-center">
        <p className="text-3xl text-dark-purple font-bold mb-8 mt-4">
          Random fact for you
        </p>
        <p className="text-xl text-dark-purple mb-4 h-[6rem] font-semibold">
          {data.fact}
        </p>
        <button
          className="bg-nice-pink text-white text-center rounded p-2  mb-4"
          onClick={fetchData}
          disabled={loading}
        >
          Get Random Fact
        </button>
      </div>
    </Layout>
  );
};

export default Tentang;
