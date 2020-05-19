import { AwsPinpointSmsChannelIntterface } from '../interfaces';
import { AwsPinpointSmsChannelArgs,  AwsPinpointSmsChannelAttrs } from '.';

export class AwsPinpointSmsChannel implements AwsPinpointSmsChannelIntterface {
  	name: string = 'aws_pinpoint_sms_channel';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_sms_channel.html';
	groupName: string = 'Pinpoint Resources';
	args: AwsPinpointSmsChannelArgs;
	attrs: AwsPinpointSmsChannelAttrs;

}
