import { AwsPinpointEventStreamArgsIntterface } from '../interfaces';


export class AwsPinpointEventStreamArgs implements AwsPinpointEventStreamArgsIntterface {
  	application_id: string;
	destination_stream_arn: string;
	role_arn: string;

}
