import { AwsNeptuneParameterGroupIntterface } from '../interfaces';
import { AwsNeptuneParameterGroupArgs,  AwsNeptuneParameterGroupAttrs } from '.';

export class AwsNeptuneParameterGroup implements AwsNeptuneParameterGroupIntterface {
  	name: string = 'aws_neptune_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_parameter_group.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneParameterGroupArgs;
	attrs: AwsNeptuneParameterGroupAttrs;

}
