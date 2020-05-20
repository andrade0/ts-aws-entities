import { AwsPinpointEmailChannelIntterface } from '../interfaces';
import { AwsPinpointEmailChannelArgs, AwsPinpointEmailChannelAttrs } from '.';

export class AwsPinpointEmailChannel implements AwsPinpointEmailChannelIntterface {
  name: string = 'aws_pinpoint_email_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointEmailChannelArgs;
  attrs: AwsPinpointEmailChannelAttrs;

}
