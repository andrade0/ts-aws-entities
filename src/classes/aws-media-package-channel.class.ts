import { AwsMediaPackageChannelIntterface } from '../interfaces';
import { AwsMediaPackageChannelArgs,  AwsMediaPackageChannelAttrs } from '.';

export class AwsMediaPackageChannel implements AwsMediaPackageChannelIntterface {
  	name: string = 'aws_media_package_channel';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/media_package_channel.html';
	groupName: string = 'MediaPackage Resources';
	args: AwsMediaPackageChannelArgs;
	attrs: AwsMediaPackageChannelAttrs;

}
