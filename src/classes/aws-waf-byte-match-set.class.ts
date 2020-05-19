import { AwsWafByteMatchSetIntterface } from '../interfaces';
import { AwsWafByteMatchSetArgs,  AwsWafByteMatchSetAttrs } from '.';

export class AwsWafByteMatchSet implements AwsWafByteMatchSetIntterface {
  	name: string = 'aws_waf_byte_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html';
	groupName: string = 'WAF Resources';
	args: AwsWafByteMatchSetArgs;
	attrs: AwsWafByteMatchSetAttrs;

}
