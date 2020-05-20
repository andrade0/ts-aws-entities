import { AwsSecurityGroupsIntterface } from '../interfaces';
import { AwsSecurityGroupsArgs, AwsSecurityGroupsAttrs } from '.';

export class AwsSecurityGroups implements AwsSecurityGroupsIntterface {
  name: string = 'aws_security_groups';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/security_groups.html';
  groupName: string = 'Data Sources';
  args: AwsSecurityGroupsArgs;
  attrs: AwsSecurityGroupsAttrs;

}
