import { AwsEbsVolumeIntterface } from '../interfaces';
import { AwsEbsVolumeArgs,  AwsEbsVolumeAttrs } from '.';

export class AwsEbsVolume implements AwsEbsVolumeIntterface {
  	name: string = 'aws_ebs_volume';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ebs_volume.html';
	groupName: string = 'EC2 Resources';
	args: AwsEbsVolumeArgs;
	attrs: AwsEbsVolumeAttrs;

}
