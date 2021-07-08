import React from "react";
import "../../style/less/views/landingsside.less";
import Footer from "../../components/navigation/Footer";
import TopBar from "../../components/navigation/TopBar";
import Hovedomrade from "../../components/hovedomrade/Hovedomrade";

export default function Landingsside() {
  return (
    <div className="landingsside">
      <TopBar />
      <Hovedomrade />
      <Footer />
    </div>
  );
}
