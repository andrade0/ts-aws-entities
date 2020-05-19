import { AwsOrganizationsPolicyIntterface } from '../interfaces';
import { AwsOrganizationsPolicyArgs,  AwsOrganizationsPolicyAttrs } from '.';

export class AwsOrganizationsPolicy implements AwsOrganizationsPolicyIntterface {
  	name: string = 'aws_organizations_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/organizations_policy.html';
	groupName: string = 'Organizations Resources';
	args: AwsOrganizationsPolicyArgs;
	attrs: AwsOrganizationsPolicyAttrs;

}
