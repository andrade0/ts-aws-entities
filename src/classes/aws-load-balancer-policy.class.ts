import { AwsLoadBalancerPolicyIntterface } from '../interfaces';
import { AwsLoadBalancerPolicyArgs, AwsLoadBalancerPolicyAttrs } from '.';

export class AwsLoadBalancerPolicy implements AwsLoadBalancerPolicyIntterface {
  name: string = 'aws_load_balancer_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html';
  groupName: string = 'EC2 Resources';
  args: AwsLoadBalancerPolicyArgs;
  attrs: AwsLoadBalancerPolicyAttrs;

}
