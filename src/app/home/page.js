import React from "react";
import Container from "../../components/container/container";
import MenuButton from "@/components/buttons/menuButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-[10%]">
        <div className="m-6 text-white font-bold text-lg">
            What would you like to create?
        </div>
      <Container>
        <MenuButton>EC2 Instance</MenuButton>
        <MenuButton>S3 Bucket</MenuButton>
        <MenuButton>DynamoDB</MenuButton>
      </Container>
    </div>
  );
}
