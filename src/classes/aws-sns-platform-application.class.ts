import { AwsSnsPlatformApplicationIntterface } from '../interfaces';
import { AwsSnsPlatformApplicationArgs,  AwsSnsPlatformApplicationAttrs } from '.';

export class AwsSnsPlatformApplication implements AwsSnsPlatformApplicationIntterface {
  	name: string = 'aws_sns_platform_application';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html';
	groupName: string = 'SNS Resources';
	args: AwsSnsPlatformApplicationArgs;
	attrs: AwsSnsPlatformApplicationAttrs;

}
