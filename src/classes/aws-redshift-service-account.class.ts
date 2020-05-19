import { AwsRedshiftServiceAccountIntterface } from '../interfaces';
import { AwsRedshiftServiceAccountArgs,  AwsRedshiftServiceAccountAttrs } from '.';

export class AwsRedshiftServiceAccount implements AwsRedshiftServiceAccountIntterface {
  	name: string = 'aws_redshift_service_account';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/redshift_service_account.html';
	groupName: string = 'Data Sources';
	args: AwsRedshiftServiceAccountArgs;
	attrs: AwsRedshiftServiceAccountAttrs;

}
