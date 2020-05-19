import { AwsCloudwatchEventTargetIntterface } from '../interfaces';
import { AwsCloudwatchEventTargetArgs,  AwsCloudwatchEventTargetAttrs } from '.';

export class AwsCloudwatchEventTarget implements AwsCloudwatchEventTargetIntterface {
  	name: string = 'aws_cloudwatch_event_target';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html';
	groupName: string = 'CloudWatch Resources';
	args: AwsCloudwatchEventTargetArgs;
	attrs: AwsCloudwatchEventTargetAttrs;

}
