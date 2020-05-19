import { AwsLbArgsIntterface, AwsLbAttrsIntterface } from '.';

export interface AwsLbIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsLbArgsIntterface;
	attrs: AwsLbAttrsIntterface;

}
