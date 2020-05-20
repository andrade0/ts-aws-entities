import { AwsWafregionalRateBasedRuleArgsIntterface } from '../interfaces';


export class AwsWafregionalRateBasedRuleArgs implements AwsWafregionalRateBasedRuleArgsIntterface {
  metric_name: string;
  name: string;
  rate_key: string;
  rate_limit: string;
  predicate?: string;
  negated: string;
  data_id: string;
  type: string;

}
