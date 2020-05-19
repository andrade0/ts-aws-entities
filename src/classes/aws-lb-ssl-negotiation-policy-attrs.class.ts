import { AwsLbSslNegotiationPolicyAttrsIntterface } from '../interfaces';


export class AwsLbSslNegotiationPolicyAttrs implements AwsLbSslNegotiationPolicyAttrsIntterface {
  	id?: string;
	name?: string;
	load_balancer?: string;
	lb_port?: string;
	attribute?: string;

}
