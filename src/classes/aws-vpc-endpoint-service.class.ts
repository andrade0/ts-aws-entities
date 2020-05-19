import { AwsVpcEndpointServiceIntterface } from '../interfaces';
import { AwsVpcEndpointServiceArgs,  AwsVpcEndpointServiceAttrs } from '.';

export class AwsVpcEndpointService implements AwsVpcEndpointServiceIntterface {
  	name: string = 'aws_vpc_endpoint_service';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcEndpointServiceArgs;
	attrs: AwsVpcEndpointServiceAttrs;

}
