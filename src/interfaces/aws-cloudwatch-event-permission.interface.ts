import { AwsCloudwatchEventPermissionArgsIntterface, AwsCloudwatchEventPermissionAttrsIntterface } from '.';

export interface AwsCloudwatchEventPermissionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchEventPermissionArgsIntterface;
	attrs: AwsCloudwatchEventPermissionAttrsIntterface;

}
