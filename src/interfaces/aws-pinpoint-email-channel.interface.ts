import { AwsPinpointEmailChannelArgsIntterface, AwsPinpointEmailChannelAttrsIntterface } from '.';

export interface AwsPinpointEmailChannelIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsPinpointEmailChannelArgsIntterface;
  attrs: AwsPinpointEmailChannelAttrsIntterface;

}
