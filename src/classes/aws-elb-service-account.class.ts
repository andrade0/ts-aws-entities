import { AwsElbServiceAccountIntterface } from '../interfaces';
import { AwsElbServiceAccountArgs,  AwsElbServiceAccountAttrs } from '.';

export class AwsElbServiceAccount implements AwsElbServiceAccountIntterface {
  	name: string = 'aws_elb_service_account';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/elb_service_account.html';
	groupName: string = 'Data Sources';
	args: AwsElbServiceAccountArgs;
	attrs: AwsElbServiceAccountAttrs;

}
