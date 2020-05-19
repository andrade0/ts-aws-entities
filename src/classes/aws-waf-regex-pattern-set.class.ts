import { AwsWafRegexPatternSetIntterface } from '../interfaces';
import { AwsWafRegexPatternSetArgs,  AwsWafRegexPatternSetAttrs } from '.';

export class AwsWafRegexPatternSet implements AwsWafRegexPatternSetIntterface {
  	name: string = 'aws_waf_regex_pattern_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_regex_pattern_set.html';
	groupName: string = 'WAF Resources';
	args: AwsWafRegexPatternSetArgs;
	attrs: AwsWafRegexPatternSetAttrs;

}
