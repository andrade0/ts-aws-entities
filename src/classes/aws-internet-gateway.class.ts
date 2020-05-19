import { AwsInternetGatewayIntterface } from '../interfaces';
import { AwsInternetGatewayArgs,  AwsInternetGatewayAttrs } from '.';

export class AwsInternetGateway implements AwsInternetGatewayIntterface {
  	name: string = 'aws_internet_gateway';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/internet_gateway.html';
	groupName: string = 'VPC Resources';
	args: AwsInternetGatewayArgs;
	attrs: AwsInternetGatewayAttrs;

}
