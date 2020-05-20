import { AwsEc2TransitGatewayArgsIntterface, AwsEc2TransitGatewayAttrsIntterface } from '.';

export interface AwsEc2TransitGatewayIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEc2TransitGatewayArgsIntterface;
  attrs: AwsEc2TransitGatewayAttrsIntterface;

}
