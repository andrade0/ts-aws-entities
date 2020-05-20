import { AwsWafregionalRegexPatternSetIntterface } from '../interfaces';
import { AwsWafregionalRegexPatternSetArgs, AwsWafregionalRegexPatternSetAttrs } from '.';

export class AwsWafregionalRegexPatternSet implements AwsWafregionalRegexPatternSetIntterface {
  name: string = 'aws_wafregional_regex_pattern_set';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html';
  groupName: string = 'WAF Regional Resources';
  args: AwsWafregionalRegexPatternSetArgs;
  attrs: AwsWafregionalRegexPatternSetAttrs;

}
