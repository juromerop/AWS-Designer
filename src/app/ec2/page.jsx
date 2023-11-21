"use client"
import { useState } from "react";

export default function Ec2() {
  return (
    <div className="w-full h-full flex flex-row m-20 items-center">
      <InstanceContainer />
    </div>
  );
}

function InstanceContainer() {
  const [systemOperative, setSystemOperative] = useState("ubuntu");
  const [instanceType, setInstanceType] = useState("t2.micro");
  const [availabilityZone, setAvailabilityZone] = useState("us-east-1a");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({systemOperative, instanceType, availabilityZone});
  }

  return (
    <div className="w-[25rem] h-[28rem] bg-white bg-opacity-10 rounded-2xl flex flex-col p-10 items-center">
      <h1 className="self-center text-2xl">Instance Options</h1>
      <form className="flex flex-col gap-5 mt-10 text-black w-[80%]" onSubmit={handleSubmit}>
        {/*AvailabilityZone*/}
        <div className="">
          <label className="text-white">Availability Zone</label>
          <select
            className="w-full h-8 rounded-lg outline-none mt-2 pl-3 bg-white bg-opacity-50"
            placeholder="Select an option"
            onChange={(e) => {
              setAvailabilityZone(e.target.value);
            }}
          >
            <option value="us-east-1a">us-east-1a</option>
            <option value="us-east-1b">us-east-1b</option>
            <option value="us-east-1c">us-east-1c</option>
            <option value="us-east-1d">us-east-1d</option>
            <option value="us-west-1a">us-west-1a</option>
          </select>
        </div>
        {/*SO*/}
        <div className="">
          <label className="text-white">System Operative</label>
          <select
              className="w-full h-8 rounded-lg outline-none mt-2 pl-3 bg-white bg-opacity-50"
              placeholder="Select an option"
              onChange={(e) => {
                setSystemOperative(e.target.value);
              }}
            >
            <option className="" value="ubuntu">
              Ubuntu
            </option>
            <option value="debian">Debian</option>
            <option value="centos">CentOS</option>
            <option value="rhel">RHEL</option>
            <option value="amazon">Amazon Linux</option>
          </select>
        </div>
        {/*Instance Type*/}
        <div className="">
          <label className="text-white">Instance Type</label>
          <select
            className="w-full h-8 rounded-lg outline-none mt-2 pl-3 bg-white bg-opacity-50"
            placeholder="Select an option"
            onChange={(e) => {
              setInstanceType(e.target.value);
            }}
          >
            <option value="t2.micro">t2.micro</option>
            <option value="t2.small">t2.small</option>
            <option value="t2.medium">t2.medium</option>
            <option value="t2.large">t2.large</option>
            <option value="t2.xlarge">t2.xlarge</option>
            <option value="t2.2xlarge">t2.2xlarge</option>
          </select>
        </div>
        {/*Submit*/}
        <div className="self-center">
          <button className="w-20 h-8 bg-green-500 rounded-lg text-white">Launch</button>
        </div>
      </form>
    </div>
  );
}
