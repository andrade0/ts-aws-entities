import { AwsCloudwatchLogGroupArgsIntterface, AwsCloudwatchLogGroupAttrsIntterface } from '.';

export interface AwsCloudwatchLogGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchLogGroupArgsIntterface;
	attrs: AwsCloudwatchLogGroupAttrsIntterface;

}
