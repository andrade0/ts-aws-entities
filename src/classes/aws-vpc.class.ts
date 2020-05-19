import { AwsVpcIntterface } from '../interfaces';
import { AwsVpcArgs,  AwsVpcAttrs } from '.';

export class AwsVpc implements AwsVpcIntterface {
  	name: string = 'aws_vpc';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcArgs;
	attrs: AwsVpcAttrs;

}
