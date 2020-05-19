import { AwsLbCookieStickinessPolicyArgsIntterface } from '../interfaces';


export class AwsLbCookieStickinessPolicyArgs implements AwsLbCookieStickinessPolicyArgsIntterface {
  	name: string;
	load_balancer: string;
	lb_port: string;
	cookie_expiration_period?: string;

}
