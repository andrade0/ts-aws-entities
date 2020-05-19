import { AwsWafregionalRuleGroupArgsIntterface } from '../interfaces';


export class AwsWafregionalRuleGroupArgs implements AwsWafregionalRuleGroupArgsIntterface {
  	name: string;
	metric_name: string;
	activated_rule?: string;
	action: string;
	priority: string;
	rule_id: string;
	type?: string;

}
