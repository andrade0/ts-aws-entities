import { AwsLoadBalancerListenerPolicyArgsIntterface } from '../interfaces';


export class AwsLoadBalancerListenerPolicyArgs implements AwsLoadBalancerListenerPolicyArgsIntterface {
  load_balancer_name: string;
  load_balancer_port: string;
  policy_names: string;

}
