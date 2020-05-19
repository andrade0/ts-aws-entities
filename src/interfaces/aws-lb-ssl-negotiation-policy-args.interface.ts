import { AwsLbSslNegotiationPolicyArgsAttributeIntterface } from '.';

export interface AwsLbSslNegotiationPolicyArgsIntterface {
  	name: string;
	load_balancer: string;
	lb_port: string;
	attribute?: AwsLbSslNegotiationPolicyArgsAttributeIntterface;

}
