import { AwsVpcEndpointIntterface } from '../interfaces';
import { AwsVpcEndpointArgs,  AwsVpcEndpointAttrs } from '.';

export class AwsVpcEndpoint implements AwsVpcEndpointIntterface {
  	name: string = 'aws_vpc_endpoint';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcEndpointArgs;
	attrs: AwsVpcEndpointAttrs;

}
