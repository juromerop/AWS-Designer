"use client";
import { useEffect, useState } from "react";
import genTemplateEC2 from "./genTemplateEC2";

export default function Ec2() {
  const [template, setTemplate] = useState("");

  useEffect(() => {
    if (localStorage.getItem("template") !== null) {
      const temp = localStorage.getItem("template");
      console.log("JSONPARSE", JSON.parse(temp, null, 2));
      setTemplate(temp);
    }
  }, []);

  return (
    <div className="h-full flex flex-row m-20 items-center justify-around">
      <InstanceContainer />
      <TemplateContainer templateGen={template} />
    </div>
  );
}

function InstanceContainer() {
  const [systemOperative, setSystemOperative] = useState("ubuntu");
  const [instanceType, setInstanceType] = useState("t2.micro");
  const [availabilityZone, setAvailabilityZone] = useState("us-east-1a");
  const [template, setTemplate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ systemOperative, instanceType, availabilityZone });
    const ec2 = {
      instanceType: `${instanceType}`,
      ami: `${systemOperative}`,
      keyName: ``,
      subnetId: ``,
      securityGroupId: ``,
      name: `new-instance`,
      region: `${availabilityZone}`,
    };
    setTemplate(genTemplateEC2(ec2));
    localStorage.setItem("template", JSON.stringify(template));
    console.log(template);
  }

  return (
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
          <button className="w-20 h-8 bg-green-500 rounded-lg text-white">
            Launch
          </button>
        </div>
      </form>
    </div>
  );
}

function TemplateContainer({ templateGen }) {
  const [template, setTemplate] = useState("");

  function prettyPrintJSON(jsonObj) {
    try {
        const parsedJSON = JSON.parse(jsonObj);
        const formattedJSON = JSON.stringify(parsedJSON, null, 2);
        console.log(formattedJSON);
        return formattedJSON;
    } catch (error) {
        console.error(`Error al decodificar el JSON: ${error.message}`);
        return null;
    }
  }

  useEffect(() => {
    setTemplate(prettyPrintJSON(templateGen));
  }, [templateGen]);
  function handleCopyToClipBoard() {
    navigator.clipboard.writeText(template);
  }
  return (
    <div className="w-[32rem]  bg-white bg-opacity-10 rounded-2xl flex flex-col p-10 items-center">
      <h1 className="self-center text-2xl">Template</h1>
      <div className="flex flex-col gap-5 mt-10 text-black w-full">
        {
          template === "" ? (
            <div className="text-white">No template generated</div>
          ) : (
            <textarea
              className="w-full h-[36rem] overflow-auto rounded-lg outline-none mt-2 pl-3 bg-white bg-opacity-50 scrollbar-hide"
              value={template}
              readOnly
            />
          )
        }
      </div>
      <div className="mt-5">
        <button className="w-20 h-8 bg-green-500 rounded-lg text-white" onClick={handleCopyToClipBoard}>
          Copy
        </button>
      </div>
    </div>
  );
}


