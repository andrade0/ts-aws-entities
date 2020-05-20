import { AwsSecurityGroupRuleIntterface } from '../interfaces';
import { AwsSecurityGroupRuleArgs, AwsSecurityGroupRuleAttrs } from '.';

export class AwsSecurityGroupRule implements AwsSecurityGroupRuleIntterface {
  name: string = 'aws_security_group_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/security_group_rule.html';
  groupName: string = 'VPC Resources';
  args: AwsSecurityGroupRuleArgs;
  attrs: AwsSecurityGroupRuleAttrs;

}
