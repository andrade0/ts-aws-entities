import { AwsDbInstanceIntterface } from '../interfaces';
import { AwsDbInstanceArgs,  AwsDbInstanceAttrs } from '.';

export class AwsDbInstance implements AwsDbInstanceIntterface {
  	name: string = 'aws_db_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/db_instance.html';
	groupName: string = 'RDS Resources';
	args: AwsDbInstanceArgs;
	attrs: AwsDbInstanceAttrs;

}
