import { AwsInstanceArgsIntterface, AwsInstanceAttrsIntterface } from '.';

export interface AwsInstanceIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsInstanceArgsIntterface;
	attrs: AwsInstanceAttrsIntterface;

}
