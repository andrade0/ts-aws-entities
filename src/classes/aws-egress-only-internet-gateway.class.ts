import { AwsEgressOnlyInternetGatewayIntterface } from '../interfaces';
import { AwsEgressOnlyInternetGatewayArgs,  AwsEgressOnlyInternetGatewayAttrs } from '.';

export class AwsEgressOnlyInternetGateway implements AwsEgressOnlyInternetGatewayIntterface {
  	name: string = 'aws_egress_only_internet_gateway';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/egress_only_internet_gateway.html';
	groupName: string = 'VPC Resources';
	args: AwsEgressOnlyInternetGatewayArgs;
	attrs: AwsEgressOnlyInternetGatewayAttrs;

}
