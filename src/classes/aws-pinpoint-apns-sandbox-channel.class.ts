import { AwsPinpointApnsSandboxChannelIntterface } from '../interfaces';
import { AwsPinpointApnsSandboxChannelArgs, AwsPinpointApnsSandboxChannelAttrs } from '.';

export class AwsPinpointApnsSandboxChannel implements AwsPinpointApnsSandboxChannelIntterface {
  name: string = 'aws_pinpoint_apns_sandbox_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_sandbox_channel.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointApnsSandboxChannelArgs;
  attrs: AwsPinpointApnsSandboxChannelAttrs;

}
