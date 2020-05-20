import { AwsPinpointEventStreamArgsIntterface, AwsPinpointEventStreamAttrsIntterface } from '.';

export interface AwsPinpointEventStreamIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsPinpointEventStreamArgsIntterface;
  attrs: AwsPinpointEventStreamAttrsIntterface;

}
