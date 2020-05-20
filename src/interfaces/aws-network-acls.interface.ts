import { AwsNetworkAclsArgsIntterface, AwsNetworkAclsAttrsIntterface } from '.';

export interface AwsNetworkAclsIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNetworkAclsArgsIntterface;
  attrs: AwsNetworkAclsAttrsIntterface;

}
