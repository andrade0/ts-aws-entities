import { AwsSsmParameterIntterface } from '../interfaces';
import { AwsSsmParameterArgs,  AwsSsmParameterAttrs } from '.';

export class AwsSsmParameter implements AwsSsmParameterIntterface {
  	name: string = 'aws_ssm_parameter';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html';
	groupName: string = 'SSM Resources';
	args: AwsSsmParameterArgs;
	attrs: AwsSsmParameterAttrs;

}
