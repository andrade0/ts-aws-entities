import { AwsBatchJobDefinitionIntterface } from '../interfaces';
import { AwsBatchJobDefinitionArgs, AwsBatchJobDefinitionAttrs } from '.';

export class AwsBatchJobDefinition implements AwsBatchJobDefinitionIntterface {
  name: string = 'aws_batch_job_definition';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html';
  groupName: string = 'Batch Resources';
  args: AwsBatchJobDefinitionArgs;
  attrs: AwsBatchJobDefinitionAttrs;

}
