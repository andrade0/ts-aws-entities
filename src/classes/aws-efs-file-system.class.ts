import { AwsEfsFileSystemIntterface } from '../interfaces';
import { AwsEfsFileSystemArgs,  AwsEfsFileSystemAttrs } from '.';

export class AwsEfsFileSystem implements AwsEfsFileSystemIntterface {
  	name: string = 'aws_efs_file_system';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/efs_file_system.html';
	groupName: string = 'EFS Resources';
	args: AwsEfsFileSystemArgs;
	attrs: AwsEfsFileSystemAttrs;

}
