import { AwsCloudwatchMetricAlarmArgsMetricQueryIntterface } from '../interfaces';


export class AwsCloudwatchMetricAlarmArgsMetricQuery implements AwsCloudwatchMetricAlarmArgsMetricQueryIntterface {
  	id: string;
	expression?: string;
	label?: string;
	return_data?: string;
	metric?: string;

}
