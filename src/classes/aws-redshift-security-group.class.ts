import { AwsRedshiftSecurityGroupIntterface } from '../interfaces';
import { AwsRedshiftSecurityGroupArgs,  AwsRedshiftSecurityGroupAttrs } from '.';

export class AwsRedshiftSecurityGroup implements AwsRedshiftSecurityGroupIntterface {
  	name: string = 'aws_redshift_security_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/redshift_security_group.html';
	groupName: string = 'Redshift Resources';
	args: AwsRedshiftSecurityGroupArgs;
	attrs: AwsRedshiftSecurityGroupAttrs;

}
