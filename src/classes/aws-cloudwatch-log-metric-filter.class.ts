import { AwsCloudwatchLogMetricFilterIntterface } from '../interfaces';
import { AwsCloudwatchLogMetricFilterArgs,  AwsCloudwatchLogMetricFilterAttrs } from '.';

export class AwsCloudwatchLogMetricFilter implements AwsCloudwatchLogMetricFilterIntterface {
  	name: string = 'aws_cloudwatch_log_metric_filter';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter.html';
	groupName: string = 'CloudWatch Resources';
	args: AwsCloudwatchLogMetricFilterArgs;
	attrs: AwsCloudwatchLogMetricFilterAttrs;

}
