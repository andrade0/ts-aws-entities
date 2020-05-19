import { AwsWafregionalRuleArgsIntterface } from '../interfaces';


export class AwsWafregionalRuleArgs implements AwsWafregionalRuleArgsIntterface {
  	name: string;
	metric_name: string;
	predicate?: string;
	type: string;
	data_id: string;
	negated: string;

}
