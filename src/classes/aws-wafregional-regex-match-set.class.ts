import { AwsWafregionalRegexMatchSetIntterface } from '../interfaces';
import { AwsWafregionalRegexMatchSetArgs,  AwsWafregionalRegexMatchSetAttrs } from '.';

export class AwsWafregionalRegexMatchSet implements AwsWafregionalRegexMatchSetIntterface {
  	name: string = 'aws_wafregional_regex_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalRegexMatchSetArgs;
	attrs: AwsWafregionalRegexMatchSetAttrs;

}
