import { AwsWafRateBasedRuleIntterface } from '../interfaces';
import { AwsWafRateBasedRuleArgs, AwsWafRateBasedRuleAttrs } from '.';

export class AwsWafRateBasedRule implements AwsWafRateBasedRuleIntterface {
  name: string = 'aws_waf_rate_based_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule.html';
  groupName: string = 'WAF Resources';
  args: AwsWafRateBasedRuleArgs;
  attrs: AwsWafRateBasedRuleAttrs;

}
