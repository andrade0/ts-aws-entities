import { AwsVpcEndpointSubnetAssociationIntterface } from '../interfaces';
import { AwsVpcEndpointSubnetAssociationArgs,  AwsVpcEndpointSubnetAssociationAttrs } from '.';

export class AwsVpcEndpointSubnetAssociation implements AwsVpcEndpointSubnetAssociationIntterface {
  	name: string = 'aws_vpc_endpoint_subnet_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcEndpointSubnetAssociationArgs;
	attrs: AwsVpcEndpointSubnetAssociationAttrs;

}
