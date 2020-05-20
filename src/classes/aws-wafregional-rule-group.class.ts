import { AwsWafregionalRuleGroupIntterface } from '../interfaces';
import { AwsWafregionalRuleGroupArgs, AwsWafregionalRuleGroupAttrs } from '.';

export class AwsWafregionalRuleGroup implements AwsWafregionalRuleGroupIntterface {
  name: string = 'aws_wafregional_rule_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html';
  groupName: string = 'WAF Regional Resources';
  args: AwsWafregionalRuleGroupArgs;
  attrs: AwsWafregionalRuleGroupAttrs;

}
