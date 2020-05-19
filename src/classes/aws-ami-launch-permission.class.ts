import { AwsAmiLaunchPermissionIntterface } from '../interfaces';
import { AwsAmiLaunchPermissionArgs,  AwsAmiLaunchPermissionAttrs } from '.';

export class AwsAmiLaunchPermission implements AwsAmiLaunchPermissionIntterface {
  	name: string = 'aws_ami_launch_permission';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ami_launch_permission.html';
	groupName: string = 'EC2 Resources';
	args: AwsAmiLaunchPermissionArgs;
	attrs: AwsAmiLaunchPermissionAttrs;

}
