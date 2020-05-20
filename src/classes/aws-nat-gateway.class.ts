import { AwsNatGatewayIntterface } from '../interfaces';
import { AwsNatGatewayArgs, AwsNatGatewayAttrs } from '.';

export class AwsNatGateway implements AwsNatGatewayIntterface {
  name: string = 'aws_nat_gateway';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/nat_gateway.html';
  groupName: string = 'VPC Resources';
  args: AwsNatGatewayArgs;
  attrs: AwsNatGatewayAttrs;

}
