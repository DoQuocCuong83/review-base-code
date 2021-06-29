import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />
      <div className="font-medium bg-yellow-900">Home</div>
      <Footer />
    </>
  );
};

export default Home;
