import { AwsNatGatewayArgsIntterface, AwsNatGatewayAttrsIntterface } from '.';

export interface AwsNatGatewayIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNatGatewayArgsIntterface;
  attrs: AwsNatGatewayAttrsIntterface;

}
