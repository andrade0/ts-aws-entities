import { AwsElbServiceAccountArgsIntterface, AwsElbServiceAccountAttrsIntterface } from '.';

export interface AwsElbServiceAccountIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsElbServiceAccountArgsIntterface;
	attrs: AwsElbServiceAccountAttrsIntterface;

}
