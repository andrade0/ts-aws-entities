import { AwsWafRegexMatchSetIntterface } from '../interfaces';
import { AwsWafRegexMatchSetArgs, AwsWafRegexMatchSetAttrs } from '.';

export class AwsWafRegexMatchSet implements AwsWafRegexMatchSetIntterface {
  name: string = 'aws_waf_regex_match_set';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_regex_match_set.html';
  groupName: string = 'WAF Resources';
  args: AwsWafRegexMatchSetArgs;
  attrs: AwsWafRegexMatchSetAttrs;

}
