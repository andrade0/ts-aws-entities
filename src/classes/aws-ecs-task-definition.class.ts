import { AwsEcsTaskDefinitionIntterface } from '../interfaces';
import { AwsEcsTaskDefinitionArgs, AwsEcsTaskDefinitionAttrs } from '.';

export class AwsEcsTaskDefinition implements AwsEcsTaskDefinitionIntterface {
  name: string = 'aws_ecs_task_definition';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html';
  groupName: string = 'ECS Resources';
  args: AwsEcsTaskDefinitionArgs;
  attrs: AwsEcsTaskDefinitionAttrs;

}
