import { AwsGlueConnectionIntterface } from '../interfaces';
import { AwsGlueConnectionArgs, AwsGlueConnectionAttrs } from '.';

export class AwsGlueConnection implements AwsGlueConnectionIntterface {
  name: string = 'aws_glue_connection';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_connection.html';
  groupName: string = 'Glue Resources';
  args: AwsGlueConnectionArgs;
  attrs: AwsGlueConnectionAttrs;

}
