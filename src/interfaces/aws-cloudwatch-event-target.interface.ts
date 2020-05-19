import { AwsCloudwatchEventTargetArgsIntterface, AwsCloudwatchEventTargetAttrsIntterface } from '.';

export interface AwsCloudwatchEventTargetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchEventTargetArgsIntterface;
	attrs: AwsCloudwatchEventTargetAttrsIntterface;

}
