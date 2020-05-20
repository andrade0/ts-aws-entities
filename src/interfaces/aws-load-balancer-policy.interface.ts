import { AwsLoadBalancerPolicyArgsIntterface, AwsLoadBalancerPolicyAttrsIntterface } from '.';

export interface AwsLoadBalancerPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLoadBalancerPolicyArgsIntterface;
  attrs: AwsLoadBalancerPolicyAttrsIntterface;

}
