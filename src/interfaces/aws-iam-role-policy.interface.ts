import { AwsIamRolePolicyArgsIntterface, AwsIamRolePolicyAttrsIntterface } from '.';

export interface AwsIamRolePolicyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamRolePolicyArgsIntterface;
	attrs: AwsIamRolePolicyAttrsIntterface;

}
