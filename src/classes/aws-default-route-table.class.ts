import { AwsDefaultRouteTableIntterface } from '../interfaces';
import { AwsDefaultRouteTableArgs,  AwsDefaultRouteTableAttrs } from '.';

export class AwsDefaultRouteTable implements AwsDefaultRouteTableIntterface {
  	name: string = 'aws_default_route_table';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/default_route_table.html';
	groupName: string = 'VPC Resources';
	args: AwsDefaultRouteTableArgs;
	attrs: AwsDefaultRouteTableAttrs;

}
