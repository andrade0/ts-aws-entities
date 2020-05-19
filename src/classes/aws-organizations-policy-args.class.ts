import { AwsOrganizationsPolicyArgsIntterface } from '../interfaces';


export class AwsOrganizationsPolicyArgs implements AwsOrganizationsPolicyArgsIntterface {
  	content: string;
	name: string;
	description?: string;
	type?: string;
	id: string;
	arn: string;

}
