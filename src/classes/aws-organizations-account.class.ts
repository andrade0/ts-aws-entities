import { AwsOrganizationsAccountIntterface } from '../interfaces';
import { AwsOrganizationsAccountArgs,  AwsOrganizationsAccountAttrs } from '.';

export class AwsOrganizationsAccount implements AwsOrganizationsAccountIntterface {
  	name: string = 'aws_organizations_account';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/organizations_account.html';
	groupName: string = 'Organizations Resources';
	args: AwsOrganizationsAccountArgs;
	attrs: AwsOrganizationsAccountAttrs;

}
