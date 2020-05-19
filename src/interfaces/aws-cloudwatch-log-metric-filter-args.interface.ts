import { AwsCloudwatchLogMetricFilterArgsMetricTransformationIntterface } from '.';

export interface AwsCloudwatchLogMetricFilterArgsIntterface {
  	name: string;
	pattern: string;
	log_group_name: string;
	metric_transformation: AwsCloudwatchLogMetricFilterArgsMetricTransformationIntterface;

}
