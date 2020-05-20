import { AwsVpnGatewayArgsIntterface, AwsVpnGatewayAttrsIntterface } from '.';

export interface AwsVpnGatewayIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpnGatewayArgsIntterface;
  attrs: AwsVpnGatewayAttrsIntterface;

}
