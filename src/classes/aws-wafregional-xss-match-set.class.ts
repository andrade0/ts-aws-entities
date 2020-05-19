import { AwsWafregionalXssMatchSetIntterface } from '../interfaces';
import { AwsWafregionalXssMatchSetArgs,  AwsWafregionalXssMatchSetAttrs } from '.';

export class AwsWafregionalXssMatchSet implements AwsWafregionalXssMatchSetIntterface {
  	name: string = 'aws_wafregional_xss_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalXssMatchSetArgs;
	attrs: AwsWafregionalXssMatchSetAttrs;

}
