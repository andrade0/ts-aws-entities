import { AwsLbCookieStickinessPolicyAttrsIntterface } from '../interfaces';


export class AwsLbCookieStickinessPolicyAttrs implements AwsLbCookieStickinessPolicyAttrsIntterface {
  	id?: string;
	name?: string;
	load_balancer?: string;
	lb_port?: string;
	cookie_expiration_period?: string;

}
