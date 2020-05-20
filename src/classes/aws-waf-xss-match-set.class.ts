import { AwsWafXssMatchSetIntterface } from '../interfaces';
import { AwsWafXssMatchSetArgs, AwsWafXssMatchSetAttrs } from '.';

export class AwsWafXssMatchSet implements AwsWafXssMatchSetIntterface {
  name: string = 'aws_waf_xss_match_set';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html';
  groupName: string = 'WAF Resources';
  args: AwsWafXssMatchSetArgs;
  attrs: AwsWafXssMatchSetAttrs;

}
