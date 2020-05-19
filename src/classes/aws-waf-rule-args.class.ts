import { AwsWafRuleArgsIntterface } from '../interfaces';


export class AwsWafRuleArgs implements AwsWafRuleArgsIntterface {
  	metric_name: string;
	name: string;
	predicates?: string;
	negated: string;
	data_id: string;
	type: string;

}
