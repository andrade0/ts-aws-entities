import { AwsLoadBalancerListenerPolicyIntterface } from '../interfaces';
import { AwsLoadBalancerListenerPolicyArgs,  AwsLoadBalancerListenerPolicyAttrs } from '.';

export class AwsLoadBalancerListenerPolicy implements AwsLoadBalancerListenerPolicyIntterface {
  	name: string = 'aws_load_balancer_listener_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html';
	groupName: string = 'EC2 Resources';
	args: AwsLoadBalancerListenerPolicyArgs;
	attrs: AwsLoadBalancerListenerPolicyAttrs;

}
