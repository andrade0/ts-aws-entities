import { AwsDbOptionGroupIntterface } from '../interfaces';
import { AwsDbOptionGroupArgs, AwsDbOptionGroupAttrs } from '.';

export class AwsDbOptionGroup implements AwsDbOptionGroupIntterface {
  name: string = 'aws_db_option_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/db_option_group.html';
  groupName: string = 'RDS Resources';
  args: AwsDbOptionGroupArgs;
  attrs: AwsDbOptionGroupAttrs;

}
