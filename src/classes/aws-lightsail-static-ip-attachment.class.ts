import { AwsLightsailStaticIpAttachmentIntterface } from '../interfaces';
import { AwsLightsailStaticIpAttachmentArgs,  AwsLightsailStaticIpAttachmentAttrs } from '.';

export class AwsLightsailStaticIpAttachment implements AwsLightsailStaticIpAttachmentIntterface {
  	name: string = 'aws_lightsail_static_ip_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html';
	groupName: string = 'Lightsail Resources';
	args: AwsLightsailStaticIpAttachmentArgs;
	attrs: AwsLightsailStaticIpAttachmentAttrs;

}
