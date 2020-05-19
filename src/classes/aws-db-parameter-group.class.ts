import { AwsDbParameterGroupIntterface } from '../interfaces';
import { AwsDbParameterGroupArgs,  AwsDbParameterGroupAttrs } from '.';

export class AwsDbParameterGroup implements AwsDbParameterGroupIntterface {
  	name: string = 'aws_db_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/db_parameter_group.html';
	groupName: string = 'RDS Resources';
	args: AwsDbParameterGroupArgs;
	attrs: AwsDbParameterGroupAttrs;

}
