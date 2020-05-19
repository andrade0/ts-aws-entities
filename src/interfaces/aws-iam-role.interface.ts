import { AwsIamRoleArgsIntterface, AwsIamRoleAttrsIntterface } from '.';

export interface AwsIamRoleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamRoleArgsIntterface;
	attrs: AwsIamRoleAttrsIntterface;

}
