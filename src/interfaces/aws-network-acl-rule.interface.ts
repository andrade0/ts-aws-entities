import { AwsNetworkAclRuleArgsIntterface, AwsNetworkAclRuleAttrsIntterface } from '.';

export interface AwsNetworkAclRuleIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNetworkAclRuleArgsIntterface;
  attrs: AwsNetworkAclRuleAttrsIntterface;

}
