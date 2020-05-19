import { AwsOpsworksPermissionIntterface } from '../interfaces';
import { AwsOpsworksPermissionArgs,  AwsOpsworksPermissionAttrs } from '.';

export class AwsOpsworksPermission implements AwsOpsworksPermissionIntterface {
  	name: string = 'aws_opsworks_permission';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksPermissionArgs;
	attrs: AwsOpsworksPermissionAttrs;

}
