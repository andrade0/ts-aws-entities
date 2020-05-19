import { AwsSnsPlatformApplicationArgsIntterface, AwsSnsPlatformApplicationAttrsIntterface } from '.';

export interface AwsSnsPlatformApplicationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSnsPlatformApplicationArgsIntterface;
	attrs: AwsSnsPlatformApplicationAttrsIntterface;

}
