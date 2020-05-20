import { AwsConfigConfigRuleIntterface } from '../interfaces';
import { AwsConfigConfigRuleArgs, AwsConfigConfigRuleAttrs } from '.';

export class AwsConfigConfigRule implements AwsConfigConfigRuleIntterface {
  name: string = 'aws_config_config_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/config_config_rule.html';
  groupName: string = 'Config Resources';
  args: AwsConfigConfigRuleArgs;
  attrs: AwsConfigConfigRuleAttrs;

}
