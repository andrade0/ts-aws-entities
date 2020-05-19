import { AwsElbArgsHealthCheckIntterface } from '../interfaces';


export class AwsElbArgsHealthCheck implements AwsElbArgsHealthCheckIntterface {
  	healthy_threshold: string;
	unhealthy_threshold: string;
	target: string;
	interval: string;
	timeout: string;

}
