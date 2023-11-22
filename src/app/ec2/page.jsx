"use client";
import { useEffect, useState } from "react";
import genTemplateEC2 from "./genTemplateEC2";
import { dataRegionsEC2 } from "./ec2Data";

export default function Ec2() {
  const [systemOperative, setSystemOperative] = useState("Ubuntu");
  const [instanceType, setInstanceType] = useState("t2.micro");
  const [availabilityZone, setAvailabilityZone] = useState("us-east-1a");
  const [template, setTemplate] = useState("");
  const [ec2, setEc2] = useState({});

  useEffect(() => {
    setTemplate(
      JSON.stringify(genTemplateEC2(ec2), null, 2)
    );
  }, [ec2]);

  function handleCopyToClipBoard() {
    navigator.clipboard.writeText(template);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const regionTemplate = dataRegionsEC2.find(
      (ami) => ami.region === availabilityZone
    );
    const ami_id = regionTemplate?.ami_list.find(
      (ami) => ami.os === systemOperative
    ).ami_id;

    const ec2 = {
      instanceType: `${instanceType}`,
      ami: `${ami_id}`,
      keyName: ``,
      subnetId: ``,
      securityGroupId: ``,
      name: `new-instance`,
      region: `${availabilityZone}`,
    };
    setEc2(ec2);
  }

  return (
    <div className="h-full flex flex-row m-20 items-center justify-around">
      <div className="w-[25rem] h-[28rem] bg-white bg-opacity-10 rounded-2xl flex flex-col p-10 items-center">
        <h1 className="self-center text-2xl">Instance Options</h1>
        <form
          className="flex flex-col gap-5 mt-10 text-black w-[80%]"
          onSubmit={handleSubmit}
        >
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
              <option value="Ubuntu">Ubuntu</option>
              <option value="Debian">Debian</option>
              <option value="CentOS">CentOS</option>
              <option value="RHEL">RHEL</option>
              <option value="Amazon Linux">Amazon Linux</option>
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
            <button className="w-20 h-8 bg-green-500 rounded-lg text-white">
              Launch
            </button>
          </div>
        </form>
      </div>

      <div className="w-[32rem]  bg-white bg-opacity-10 rounded-2xl flex flex-col p-10 items-center">
        <h1 className="self-center text-2xl">Template</h1>
        <div className="flex flex-col gap-5 mt-10 text-black w-full">
          {template === "" ? (
            <div className="text-white">No template generated</div>
          ) : (
            <textarea
              className="w-full h-[36rem] overflow-auto rounded-lg outline-none mt-2 pl-3 bg-white bg-opacity-50 scrollbar-hide"
              value={template}
              readOnly
            />
          )}
        </div>
        <div className="mt-5">
          <button
            className="w-20 h-8 bg-green-500 rounded-lg text-white"
            onClick={handleCopyToClipBoard}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}