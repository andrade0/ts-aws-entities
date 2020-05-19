import { AwsPinpointAppIntterface } from '../interfaces';
import { AwsPinpointAppArgs,  AwsPinpointAppAttrs } from '.';

export class AwsPinpointApp implements AwsPinpointAppIntterface {
  	name: string = 'aws_pinpoint_app';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/pinpoint_app.html';
	groupName: string = 'Pinpoint Resources';
	args: AwsPinpointAppArgs;
	attrs: AwsPinpointAppAttrs;

}
