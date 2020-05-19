import { AwsLaunchTemplateArgsIntterface, AwsLaunchTemplateAttrsIntterface } from '.';

export interface AwsLaunchTemplateIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsLaunchTemplateArgsIntterface;
	attrs: AwsLaunchTemplateAttrsIntterface;

}
