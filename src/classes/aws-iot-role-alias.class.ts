import { AwsIotRoleAliasIntterface } from '../interfaces';
import { AwsIotRoleAliasArgs, AwsIotRoleAliasAttrs } from '.';

export class AwsIotRoleAlias implements AwsIotRoleAliasIntterface {
  name: string = 'aws_iot_role_alias';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html';
  groupName: string = 'IoT Resources';
  args: AwsIotRoleAliasArgs;
  attrs: AwsIotRoleAliasAttrs;

}
