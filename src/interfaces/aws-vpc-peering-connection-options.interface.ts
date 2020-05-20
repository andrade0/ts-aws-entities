import { AwsVpcPeeringConnectionOptionsArgsIntterface, AwsVpcPeeringConnectionOptionsAttrsIntterface } from '.';

export interface AwsVpcPeeringConnectionOptionsIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpcPeeringConnectionOptionsArgsIntterface;
  attrs: AwsVpcPeeringConnectionOptionsAttrsIntterface;

}
