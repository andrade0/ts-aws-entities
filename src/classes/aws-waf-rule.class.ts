import { AwsWafRuleIntterface } from '../interfaces';
import { AwsWafRuleArgs, AwsWafRuleAttrs } from '.';

export class AwsWafRule implements AwsWafRuleIntterface {
  name: string = 'aws_waf_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_rule.html';
  groupName: string = 'WAF Resources';
  args: AwsWafRuleArgs;
  attrs: AwsWafRuleAttrs;

}
