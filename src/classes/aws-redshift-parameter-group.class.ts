import { AwsRedshiftParameterGroupIntterface } from '../interfaces';
import { AwsRedshiftParameterGroupArgs,  AwsRedshiftParameterGroupAttrs } from '.';

export class AwsRedshiftParameterGroup implements AwsRedshiftParameterGroupIntterface {
  	name: string = 'aws_redshift_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/redshift_parameter_group.html';
	groupName: string = 'Redshift Resources';
	args: AwsRedshiftParameterGroupArgs;
	attrs: AwsRedshiftParameterGroupAttrs;

}
