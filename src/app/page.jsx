
import MenuButton from "@/components/Buttons/MenuButton";
import Container from "@/components/ContainerHomePage/Container";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-[10%]">
      <div className="m-6 text-white font-bold text-lg">
        What would you like to create?
      </div>
      <Container>
        <MenuButton to="ec2">EC2 Instance</MenuButton>
        <MenuButton to="s3">S3 Bucket</MenuButton>
        <MenuButton to="dynamo">DynamoDB</MenuButton>
      </Container>
    </div>
  );
}
