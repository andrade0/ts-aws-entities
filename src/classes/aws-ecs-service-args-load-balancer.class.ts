import { AwsEcsServiceArgsLoadBalancerIntterface } from '../interfaces';


export class AwsEcsServiceArgsLoadBalancer implements AwsEcsServiceArgsLoadBalancerIntterface {
  	elb_name: string;
	target_group_arn: string;
	container_name: string;
	container_port: string;

}
