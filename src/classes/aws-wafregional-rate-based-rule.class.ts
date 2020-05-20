import { AwsWafregionalRateBasedRuleIntterface } from '../interfaces';
import { AwsWafregionalRateBasedRuleArgs, AwsWafregionalRateBasedRuleAttrs } from '.';

export class AwsWafregionalRateBasedRule implements AwsWafregionalRateBasedRuleIntterface {
  name: string = 'aws_wafregional_rate_based_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html';
  groupName: string = 'WAF Regional Resources';
  args: AwsWafregionalRateBasedRuleArgs;
  attrs: AwsWafregionalRateBasedRuleAttrs;

}
