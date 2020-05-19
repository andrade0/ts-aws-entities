import { AwsCloudwatchDashboardArgsIntterface, AwsCloudwatchDashboardAttrsIntterface } from '.';

export interface AwsCloudwatchDashboardIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchDashboardArgsIntterface;
	attrs: AwsCloudwatchDashboardAttrsIntterface;

}
