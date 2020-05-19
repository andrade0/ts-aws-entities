import { AwsAutoscalingNotificationArgsIntterface, AwsAutoscalingNotificationAttrsIntterface } from '.';

export interface AwsAutoscalingNotificationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAutoscalingNotificationArgsIntterface;
	attrs: AwsAutoscalingNotificationAttrsIntterface;

}
