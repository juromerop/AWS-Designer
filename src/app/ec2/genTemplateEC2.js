export default function genTemplateEC2({
  instanceType,
  ami,
  keyName,
  subnetId,
  securityGroupId,
  name,
  region,
}) {
  return `
    "AWSTemplateFormatVersion": "2010-09-09",
    "Description": "AWS CloudFormation Template to deploy EC2 instance",
    "Parameters": {
      "Name": {
        "Description": "Name of the instance",
        "Type": "String",
        "Default": ${name},
        "ConstraintDescription": "must be a valid name."
      },
      "Region": {
        "Description": "Region",
        "Type": "String",
        "Default": ${region},
        "ConstraintDescription": "must be a valid region."
      }
    },
    "Resources": {
      "EC2Instance": {
        "Type": "AWS::EC2::Instance",
        "Properties": {
          "InstanceType": ${instanceType},
          "ImageId": ${ami},
          "KeyName": ${keyName},
          "SubnetId": ${subnetId},
          "SecurityGroupIds": [
            ${securityGroupId}
          ],
          "Tags": [
            {
              "Key": "Name",
              "Value": ${name}
            }
          ]
        }
      }
    }
  }`

}
// return `
//     "Resources": {
//       "ec2Instance": {
//         "Type": "AWS::EC2::Instance",
//         "Properties": {
//           "InstanceType": ${instanceType},
//           "ImageId": ${ami},
//           "KeyName": ${keyName},
//           "SubnetId": ${subnetId},
//           "SecurityGroupIds": [
//             ${securityGroupId}
//           ],
//           "Tags": [
//             {
//               "Key": "Name",
//               "Value": ${name}
//             }
//           ]
//         }
//       }
//     }
//   `;

// return `
//     "AWSTemplateFormatVersion": "2010-09-09",\n
//     "Description": "AWS CloudFormation Template to deploy EC2 instance",\n
//     "Parameters": {\n
//       "Name": {\n
//         "Description": "Name of the instance",\n
//         "Type": "String",\n
//         "Default": ${name},\n
//         "ConstraintDescription": "must be a valid name."\n
//       },\n
//       "Region": {\n
//         "Description": "Region",\n
//         "Type": "String",\n
//         "Default": ${region},\n
//         "ConstraintDescription": "must be a valid region."\n
//       }\n
//     },\n
//     "Resources": {\n
//       "EC2Instance": {\n
//         "Type": "AWS::EC2::Instance",\n
//         "Properties": {\n
//           "InstanceType": ${instanceType},\n
//           "ImageId": ${ami},\n
//           "KeyName": ${keyName},\n
//           "SubnetId": ${subnetId},\n
//           "SecurityGroupIds": [\n
//             ${securityGroupId}\n
//           ],\n
//           "Tags": [\n
//             {\n
//               "Key": "Name",\n
//               "Value": ${name}\n
//             }\n
//           ]\n
//         }\n
//       }\n
//     }\n
//   }\n`