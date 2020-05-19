import { AwsPinpointBaiduChannelIntterface } from '../interfaces';
import { AwsPinpointBaiduChannelArgs,  AwsPinpointBaiduChannelAttrs } from '.';

export class AwsPinpointBaiduChannel implements AwsPinpointBaiduChannelIntterface {
  	name: string = 'aws_pinpoint_baidu_channel';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_baidu_channel.html';
	groupName: string = 'Pinpoint Resources';
	args: AwsPinpointBaiduChannelArgs;
	attrs: AwsPinpointBaiduChannelAttrs;

}
