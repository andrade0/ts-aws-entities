import { AwsElasticBeanstalkApplicationArgsIntterface, AwsElasticBeanstalkApplicationAttrsIntterface } from '.';

export interface AwsElasticBeanstalkApplicationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsElasticBeanstalkApplicationArgsIntterface;
	attrs: AwsElasticBeanstalkApplicationAttrsIntterface;

}
