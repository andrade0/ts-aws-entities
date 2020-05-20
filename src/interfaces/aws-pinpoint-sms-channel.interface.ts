import { AwsPinpointSmsChannelArgsIntterface, AwsPinpointSmsChannelAttrsIntterface } from '.';

export interface AwsPinpointSmsChannelIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsPinpointSmsChannelArgsIntterface;
  attrs: AwsPinpointSmsChannelAttrsIntterface;

}
