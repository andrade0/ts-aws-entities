import { AwsPinpointGcmChannelIntterface } from '../interfaces';
import { AwsPinpointGcmChannelArgs, AwsPinpointGcmChannelAttrs } from '.';

export class AwsPinpointGcmChannel implements AwsPinpointGcmChannelIntterface {
  name: string = 'aws_pinpoint_gcm_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_gcm_channel.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointGcmChannelArgs;
  attrs: AwsPinpointGcmChannelAttrs;

}
