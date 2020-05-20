import { AwsVpcEndpointArgsIntterface, AwsVpcEndpointAttrsIntterface } from '.';

export interface AwsVpcEndpointIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpcEndpointArgsIntterface;
  attrs: AwsVpcEndpointAttrsIntterface;

}
