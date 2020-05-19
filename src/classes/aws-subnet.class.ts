import { AwsSubnetIntterface } from '../interfaces';
import { AwsSubnetArgs,  AwsSubnetAttrs } from '.';

export class AwsSubnet implements AwsSubnetIntterface {
  	name: string = 'aws_subnet';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/subnet.html';
	groupName: string = 'VPC Resources';
	args: AwsSubnetArgs;
	attrs: AwsSubnetAttrs;

}
