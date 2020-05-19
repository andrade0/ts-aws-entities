import { AwsWafregionalByteMatchSetIntterface } from '../interfaces';
import { AwsWafregionalByteMatchSetArgs,  AwsWafregionalByteMatchSetAttrs } from '.';

export class AwsWafregionalByteMatchSet implements AwsWafregionalByteMatchSetIntterface {
  	name: string = 'aws_wafregional_byte_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalByteMatchSetArgs;
	attrs: AwsWafregionalByteMatchSetAttrs;

}
