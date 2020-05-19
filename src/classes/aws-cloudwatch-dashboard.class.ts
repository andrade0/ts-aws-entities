import { AwsCloudwatchDashboardIntterface } from '../interfaces';
import { AwsCloudwatchDashboardArgs,  AwsCloudwatchDashboardAttrs } from '.';

export class AwsCloudwatchDashboard implements AwsCloudwatchDashboardIntterface {
  	name: string = 'aws_cloudwatch_dashboard';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_dashboard.html';
	groupName: string = 'CloudWatch Resources';
	args: AwsCloudwatchDashboardArgs;
	attrs: AwsCloudwatchDashboardAttrs;

}
