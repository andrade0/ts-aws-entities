import { AwsLbListenerArgsPortIntterface } from '.';

export interface AwsLbListenerArgsIntterface {
  	load_balancer_arn: string;
	port: AwsLbListenerArgsPortIntterface;
	protocol?: string;
	ssl_policy?: string;
	certificate_arn?: string;
	default_action: string;

}
