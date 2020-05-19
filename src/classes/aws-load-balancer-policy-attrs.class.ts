import { AwsLoadBalancerPolicyAttrsIntterface } from '../interfaces';


export class AwsLoadBalancerPolicyAttrs implements AwsLoadBalancerPolicyAttrsIntterface {
  	id?: string;
	policy_name?: string;
	policy_type_name?: string;
	load_balancer_name?: string;

}
