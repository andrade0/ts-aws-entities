import { AwsPinpointApnsChannelIntterface } from '../interfaces';
import { AwsPinpointApnsChannelArgs, AwsPinpointApnsChannelAttrs } from '.';

export class AwsPinpointApnsChannel implements AwsPinpointApnsChannelIntterface {
  name: string = 'aws_pinpoint_apns_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointApnsChannelArgs;
  attrs: AwsPinpointApnsChannelAttrs;

}
