import { AwsCloudwatchLogMetricFilterArgsIntterface } from '../interfaces';
import { AwsCloudwatchLogMetricFilterArgsMetricTransformation } from '.';

export class AwsCloudwatchLogMetricFilterArgs implements AwsCloudwatchLogMetricFilterArgsIntterface {
  	name: string;
	pattern: string;
	log_group_name: string;
	metric_transformation: AwsCloudwatchLogMetricFilterArgsMetricTransformation;

}
