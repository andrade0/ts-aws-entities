import { AwsWafRuleGroupArgsIntterface } from '../interfaces';


export class AwsWafRuleGroupArgs implements AwsWafRuleGroupArgsIntterface {
  	name: string;
	metric_name: string;
	activated_rule?: string;
	action: string;
	priority: string;
	rule_id: string;
	type?: string;

}
