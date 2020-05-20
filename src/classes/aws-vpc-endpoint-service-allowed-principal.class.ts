import { AwsVpcEndpointServiceAllowedPrincipalIntterface } from '../interfaces';
import { AwsVpcEndpointServiceAllowedPrincipalArgs, AwsVpcEndpointServiceAllowedPrincipalAttrs } from '.';

export class AwsVpcEndpointServiceAllowedPrincipal implements AwsVpcEndpointServiceAllowedPrincipalIntterface {
  name: string = 'aws_vpc_endpoint_service_allowed_principal';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html';
  groupName: string = 'VPC Resources';
  args: AwsVpcEndpointServiceAllowedPrincipalArgs;
  attrs: AwsVpcEndpointServiceAllowedPrincipalAttrs;

}
