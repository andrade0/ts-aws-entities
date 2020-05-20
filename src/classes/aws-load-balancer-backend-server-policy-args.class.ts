import { AwsLoadBalancerBackendServerPolicyArgsIntterface } from '../interfaces';


export class AwsLoadBalancerBackendServerPolicyArgs implements AwsLoadBalancerBackendServerPolicyArgsIntterface {
  load_balancer_name: string;
  policy_names: string;
  instance_port: string;

}
