import { AwsDaxParameterGroupIntterface } from '../interfaces';
import { AwsDaxParameterGroupArgs,  AwsDaxParameterGroupAttrs } from '.';

export class AwsDaxParameterGroup implements AwsDaxParameterGroupIntterface {
  	name: string = 'aws_dax_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dax_parameter_group.html';
	groupName: string = 'DynamoDB Accelerator Resources';
	args: AwsDaxParameterGroupArgs;
	attrs: AwsDaxParameterGroupAttrs;

}
