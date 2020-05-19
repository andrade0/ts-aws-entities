import { AwsRoute53HealthCheckArgsIntterface, AwsRoute53HealthCheckAttrsIntterface } from '.';

export interface AwsRoute53HealthCheckIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRoute53HealthCheckArgsIntterface;
	attrs: AwsRoute53HealthCheckAttrsIntterface;

}
