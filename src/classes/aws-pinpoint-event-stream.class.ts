import { AwsPinpointEventStreamIntterface } from '../interfaces';
import { AwsPinpointEventStreamArgs, AwsPinpointEventStreamAttrs } from '.';

export class AwsPinpointEventStream implements AwsPinpointEventStreamIntterface {
  name: string = 'aws_pinpoint_event_stream';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html';
  groupName: string = 'Pinpoint Resources';
  args: AwsPinpointEventStreamArgs;
  attrs: AwsPinpointEventStreamAttrs;

}
