import { AwsWafRuleGroupIntterface } from '../interfaces';
import { AwsWafRuleGroupArgs,  AwsWafRuleGroupAttrs } from '.';

export class AwsWafRuleGroup implements AwsWafRuleGroupIntterface {
  	name: string = 'aws_waf_rule_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_rule_group.html';
	groupName: string = 'WAF Resources';
	args: AwsWafRuleGroupArgs;
	attrs: AwsWafRuleGroupAttrs;

}
