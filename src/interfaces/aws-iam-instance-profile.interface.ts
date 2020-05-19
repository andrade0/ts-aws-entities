import { AwsIamInstanceProfileArgsIntterface, AwsIamInstanceProfileAttrsIntterface } from '.';

export interface AwsIamInstanceProfileIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamInstanceProfileArgsIntterface;
	attrs: AwsIamInstanceProfileAttrsIntterface;

}
