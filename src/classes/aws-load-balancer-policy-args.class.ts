import { AwsLoadBalancerPolicyArgsIntterface } from '../interfaces';


export class AwsLoadBalancerPolicyArgs implements AwsLoadBalancerPolicyArgsIntterface {
  load_balancer_name: string;
  policy_name: string;
  policy_type_name: string;
  policy_attribute?: string;

}
