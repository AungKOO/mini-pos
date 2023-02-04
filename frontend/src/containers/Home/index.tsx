import React from "react";
import Card from "../../components/Card";
import Pill from "../../components/Pill";
import Drawer from "../../components/drawer";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-center bg-cyan-600 px-4 py-2">
          <p className="text-3xl text-left">K-Link</p>
          <Drawer></Drawer>
        </div>
        <div className="text-center px-4 py-2 flex">
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
        </div>
        <div className="text-center bg-white-600 p-4">
          <div className="flex items-center justify-start flex-wrap">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
