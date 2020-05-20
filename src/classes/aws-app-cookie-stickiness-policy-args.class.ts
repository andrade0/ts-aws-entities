import { AwsAppCookieStickinessPolicyArgsIntterface } from '../interfaces';


export class AwsAppCookieStickinessPolicyArgs implements AwsAppCookieStickinessPolicyArgsIntterface {
  name: string;
  load_balancer: string;
  lb_port: string;
  cookie_name: string;

}
