import { AwsAthenaDatabaseIntterface } from '../interfaces';
import { AwsAthenaDatabaseArgs, AwsAthenaDatabaseAttrs } from '.';

export class AwsAthenaDatabase implements AwsAthenaDatabaseIntterface {
  name: string = 'aws_athena_database';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/athena_database.html';
  groupName: string = 'Athena Resources';
  args: AwsAthenaDatabaseArgs;
  attrs: AwsAthenaDatabaseAttrs;

}
