import { AwsEfsMountTargetIntterface } from '../interfaces';
import { AwsEfsMountTargetArgs,  AwsEfsMountTargetAttrs } from '.';

export class AwsEfsMountTarget implements AwsEfsMountTargetIntterface {
  	name: string = 'aws_efs_mount_target';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/efs_mount_target.html';
	groupName: string = 'EFS Resources';
	args: AwsEfsMountTargetArgs;
	attrs: AwsEfsMountTargetAttrs;

}
