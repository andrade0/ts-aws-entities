import { AwsCustomerGatewayIntterface } from '../interfaces';
import { AwsCustomerGatewayArgs, AwsCustomerGatewayAttrs } from '.';

export class AwsCustomerGateway implements AwsCustomerGatewayIntterface {
  name: string = 'aws_customer_gateway';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/customer_gateway.html';
  groupName: string = 'VPC Resources';
  args: AwsCustomerGatewayArgs;
  attrs: AwsCustomerGatewayAttrs;

}
