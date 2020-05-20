import {
  AwsVpcEndpointServiceAllowedPrincipalArgsIntterface,
  AwsVpcEndpointServiceAllowedPrincipalAttrsIntterface,
} from '.';

export interface AwsVpcEndpointServiceAllowedPrincipalIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpcEndpointServiceAllowedPrincipalArgsIntterface;
  attrs: AwsVpcEndpointServiceAllowedPrincipalAttrsIntterface;

}
