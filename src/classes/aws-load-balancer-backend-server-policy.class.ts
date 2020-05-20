import { AwsLoadBalancerBackendServerPolicyIntterface } from '../interfaces';
import { AwsLoadBalancerBackendServerPolicyArgs, AwsLoadBalancerBackendServerPolicyAttrs } from '.';

export class AwsLoadBalancerBackendServerPolicy implements AwsLoadBalancerBackendServerPolicyIntterface {
  name: string = 'aws_load_balancer_backend_server_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html';
  groupName: string = 'EC2 Resources';
  args: AwsLoadBalancerBackendServerPolicyArgs;
  attrs: AwsLoadBalancerBackendServerPolicyAttrs;

}
