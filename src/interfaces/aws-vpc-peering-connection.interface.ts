import { AwsVpcPeeringConnectionArgsIntterface, AwsVpcPeeringConnectionAttrsIntterface } from '.';

export interface AwsVpcPeeringConnectionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpcPeeringConnectionArgsIntterface;
  attrs: AwsVpcPeeringConnectionAttrsIntterface;

}
