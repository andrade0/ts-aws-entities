import { AwsWafregionalRuleIntterface } from '../interfaces';
import { AwsWafregionalRuleArgs,  AwsWafregionalRuleAttrs } from '.';

export class AwsWafregionalRule implements AwsWafregionalRuleIntterface {
  	name: string = 'aws_wafregional_rule';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalRuleArgs;
	attrs: AwsWafregionalRuleAttrs;

}
