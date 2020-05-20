import { AwsLoadBalancerBackendServerPolicyArgsIntterface, AwsLoadBalancerBackendServerPolicyAttrsIntterface } from '.';

export interface AwsLoadBalancerBackendServerPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLoadBalancerBackendServerPolicyArgsIntterface;
  attrs: AwsLoadBalancerBackendServerPolicyAttrsIntterface;

}
