import { AwsVpcEndpointServiceArgsIntterface, AwsVpcEndpointServiceAttrsIntterface } from '.';

export interface AwsVpcEndpointServiceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpcEndpointServiceArgsIntterface;
  attrs: AwsVpcEndpointServiceAttrsIntterface;

}
