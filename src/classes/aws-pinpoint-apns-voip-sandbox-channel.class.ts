import { AwsPinpointApnsVoipSandboxChannelIntterface } from '../interfaces';
import { AwsPinpointApnsVoipSandboxChannelArgs, AwsPinpointApnsVoipSandboxChannelAttrs } from '.';

export class AwsPinpointApnsVoipSandboxChannel implements AwsPinpointApnsVoipSandboxChannelIntterface {
  name: string = 'aws_pinpoint_apns_voip_sandbox_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointApnsVoipSandboxChannelArgs;
  attrs: AwsPinpointApnsVoipSandboxChannelAttrs;

}
