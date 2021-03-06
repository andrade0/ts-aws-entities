import { AwsWafRateBasedRuleArgsIntterface } from '../interfaces';


export class AwsWafRateBasedRuleArgs implements AwsWafRateBasedRuleArgsIntterface {
  metric_name: string;
  name: string;
  rate_key: string;
  rate_limit: string;
  predicates?: string;
  negated: string;
  data_id: string;
  type: string;

}
