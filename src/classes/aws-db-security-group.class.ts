import { AwsDbSecurityGroupIntterface } from '../interfaces';
import { AwsDbSecurityGroupArgs,  AwsDbSecurityGroupAttrs } from '.';

export class AwsDbSecurityGroup implements AwsDbSecurityGroupIntterface {
  	name: string = 'aws_db_security_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/db_security_group.html';
	groupName: string = 'RDS Resources';
	args: AwsDbSecurityGroupArgs;
	attrs: AwsDbSecurityGroupAttrs;

}
