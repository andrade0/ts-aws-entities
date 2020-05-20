import { AwsWafRateBasedRuleArgsIntterface, AwsWafRateBasedRuleAttrsIntterface } from '.';

export interface AwsWafRateBasedRuleIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsWafRateBasedRuleArgsIntterface;
  attrs: AwsWafRateBasedRuleAttrsIntterface;

}
