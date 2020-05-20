import { AwsCustomerGatewayArgsIntterface, AwsCustomerGatewayAttrsIntterface } from '.';

export interface AwsCustomerGatewayIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCustomerGatewayArgsIntterface;
  attrs: AwsCustomerGatewayAttrsIntterface;

}
