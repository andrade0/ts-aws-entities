import { AwsLbTargetGroupArgsProtocolIntterface } from '../interfaces';


export class AwsLbTargetGroupArgsProtocol implements AwsLbTargetGroupArgsProtocolIntterface {
  	interval?: string;
	path: string;
	port?: string;
	protocol?: string;
	timeout?: string;
	healthy_threshold?: string;
	unhealthy_threshold?: string;
	matcher: string;

}
