import { AwsAppCookieStickinessPolicyIntterface } from '../interfaces';
import { AwsAppCookieStickinessPolicyArgs, AwsAppCookieStickinessPolicyAttrs } from '.';

export class AwsAppCookieStickinessPolicy implements AwsAppCookieStickinessPolicyIntterface {
  name: string = 'aws_app_cookie_stickiness_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html';
  groupName: string = 'EC2 Resources';
  args: AwsAppCookieStickinessPolicyArgs;
  attrs: AwsAppCookieStickinessPolicyAttrs;

}
