import { AwsLoadBalancerListenerPolicyArgsIntterface, AwsLoadBalancerListenerPolicyAttrsIntterface } from '.';

export interface AwsLoadBalancerListenerPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLoadBalancerListenerPolicyArgsIntterface;
  attrs: AwsLoadBalancerListenerPolicyAttrsIntterface;

}
