import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import UserGrid from "./components/Usergriend";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`
    );
    setUserdata(response.data);
  };

  useEffect(() => {     
    getdata();       // Data direct ayega isaa
  }, [index]);

  let printuser = <Loader />;   // jab tak data nahi aata

  if (userdata.length > 0) {
    printuser = <UserGrid userdata={userdata} />; // component call
  }
  return (
    <div className="bg-black overflow-auto text-white p-5 h-screen">
      <Navbar />
      {printuser}
      <Pagination index={index} setIndex={setIndex} setUserdata={setUserdata} />
      <Footer />
    </div>
  );
};

export default App;
