import { AwsPinpointApnsVoipChannelIntterface } from '../interfaces';
import { AwsPinpointApnsVoipChannelArgs,  AwsPinpointApnsVoipChannelAttrs } from '.';

export class AwsPinpointApnsVoipChannel implements AwsPinpointApnsVoipChannelIntterface {
  	name: string = 'aws_pinpoint_apns_voip_channel';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel.html';
	groupName: string = 'Pinpoint Resources';
	args: AwsPinpointApnsVoipChannelArgs;
	attrs: AwsPinpointApnsVoipChannelAttrs;

}
