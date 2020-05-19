import { AwsLaunchTemplateIntterface } from '../interfaces';
import { AwsLaunchTemplateArgs,  AwsLaunchTemplateAttrs } from '.';

export class AwsLaunchTemplate implements AwsLaunchTemplateIntterface {
  	name: string = 'aws_launch_template';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/launch_template.html';
	groupName: string = 'EC2 Resources';
	args: AwsLaunchTemplateArgs;
	attrs: AwsLaunchTemplateAttrs;

}
