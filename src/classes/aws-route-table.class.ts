import { AwsRouteTableIntterface } from '../interfaces';
import { AwsRouteTableArgs,  AwsRouteTableAttrs } from '.';

export class AwsRouteTable implements AwsRouteTableIntterface {
  	name: string = 'aws_route_table';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/route_table.html';
	groupName: string = 'VPC Resources';
	args: AwsRouteTableArgs;
	attrs: AwsRouteTableAttrs;

}
