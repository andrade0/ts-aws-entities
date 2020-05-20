import { AwsWafRuleArgsIntterface, AwsWafRuleAttrsIntterface } from '.';

export interface AwsWafRuleIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsWafRuleArgsIntterface;
  attrs: AwsWafRuleAttrsIntterface;

}
