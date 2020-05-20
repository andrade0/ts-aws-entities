import { AwsGlueJobIntterface } from '../interfaces';
import { AwsGlueJobArgs, AwsGlueJobAttrs } from '.';

export class AwsGlueJob implements AwsGlueJobIntterface {
  name: string = 'aws_glue_job';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_job.html';
  groupName: string = 'Glue Resources';
  args: AwsGlueJobArgs;
  attrs: AwsGlueJobAttrs;

}
