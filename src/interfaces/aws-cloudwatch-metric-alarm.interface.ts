import { AwsCloudwatchMetricAlarmArgsIntterface, AwsCloudwatchMetricAlarmAttrsIntterface } from '.';

export interface AwsCloudwatchMetricAlarmIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchMetricAlarmArgsIntterface;
	attrs: AwsCloudwatchMetricAlarmAttrsIntterface;

}
