import { AwsDefaultNetworkAclArgsIntterface, AwsDefaultNetworkAclAttrsIntterface } from '.';

export interface AwsDefaultNetworkAclIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDefaultNetworkAclArgsIntterface;
  attrs: AwsDefaultNetworkAclAttrsIntterface;

}
