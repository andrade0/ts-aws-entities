import { AwsCloudwatchMetricAlarmIntterface } from '../interfaces';
import { AwsCloudwatchMetricAlarmArgs,  AwsCloudwatchMetricAlarmAttrs } from '.';

export class AwsCloudwatchMetricAlarm implements AwsCloudwatchMetricAlarmIntterface {
  	name: string = 'aws_cloudwatch_metric_alarm';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_metric_alarm.html';
	groupName: string = 'CloudWatch Resources';
	args: AwsCloudwatchMetricAlarmArgs;
	attrs: AwsCloudwatchMetricAlarmAttrs;

}
