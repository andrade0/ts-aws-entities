import { AwsEcsContainerDefinitionIntterface } from '../interfaces';
import { AwsEcsContainerDefinitionArgs,  AwsEcsContainerDefinitionAttrs } from '.';

export class AwsEcsContainerDefinition implements AwsEcsContainerDefinitionIntterface {
  	name: string = 'aws_ecs_container_definition';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html';
	groupName: string = 'Data Sources';
	args: AwsEcsContainerDefinitionArgs;
	attrs: AwsEcsContainerDefinitionAttrs;

}
