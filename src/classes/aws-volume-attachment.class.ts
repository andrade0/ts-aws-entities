import { AwsVolumeAttachmentIntterface } from '../interfaces';
import { AwsVolumeAttachmentArgs,  AwsVolumeAttachmentAttrs } from '.';

export class AwsVolumeAttachment implements AwsVolumeAttachmentIntterface {
  	name: string = 'aws_volume_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/volume_attachment.html';
	groupName: string = 'EC2 Resources';
	args: AwsVolumeAttachmentArgs;
	attrs: AwsVolumeAttachmentAttrs;

}
