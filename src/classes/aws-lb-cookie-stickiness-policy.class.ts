import { AwsLbCookieStickinessPolicyIntterface } from '../interfaces';
import { AwsLbCookieStickinessPolicyArgs, AwsLbCookieStickinessPolicyAttrs } from '.';

export class AwsLbCookieStickinessPolicy implements AwsLbCookieStickinessPolicyIntterface {
  name: string = 'aws_lb_cookie_stickiness_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html';
  groupName: string = 'EC2 Resources';
  args: AwsLbCookieStickinessPolicyArgs;
  attrs: AwsLbCookieStickinessPolicyAttrs;

}
