import { AwsPinpointAdmChannelIntterface } from '../interfaces';
import { AwsPinpointAdmChannelArgs, AwsPinpointAdmChannelAttrs } from '.';

export class AwsPinpointAdmChannel implements AwsPinpointAdmChannelIntterface {
  name: string = 'aws_pinpoint_adm_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_adm_channel.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointAdmChannelArgs;
  attrs: AwsPinpointAdmChannelAttrs;

}
