import { AwsAlbTargetGroupArgsProtocolIntterface } from '../interfaces';


export class AwsAlbTargetGroupArgsProtocol implements AwsAlbTargetGroupArgsProtocolIntterface {
  	interval?: string;
	path: string;
	port?: string;
	protocol?: string;
	timeout?: string;
	healthy_threshold?: string;
	unhealthy_threshold?: string;
	matcher: string;

}
