import { AwsCloudwatchLogDestinationArgsIntterface, AwsCloudwatchLogDestinationAttrsIntterface } from '.';

export interface AwsCloudwatchLogDestinationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchLogDestinationArgsIntterface;
	attrs: AwsCloudwatchLogDestinationAttrsIntterface;

}
