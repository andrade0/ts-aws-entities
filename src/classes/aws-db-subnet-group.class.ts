import { AwsDbSubnetGroupIntterface } from '../interfaces';
import { AwsDbSubnetGroupArgs, AwsDbSubnetGroupAttrs } from '.';

export class AwsDbSubnetGroup implements AwsDbSubnetGroupIntterface {
  name: string = 'aws_db_subnet_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html';
  groupName: string = 'RDS Resources';
  args: AwsDbSubnetGroupArgs;
  attrs: AwsDbSubnetGroupAttrs;

}
