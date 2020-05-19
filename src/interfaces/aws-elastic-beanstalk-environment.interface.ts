import { AwsElasticBeanstalkEnvironmentArgsIntterface, AwsElasticBeanstalkEnvironmentAttrsIntterface } from '.';

export interface AwsElasticBeanstalkEnvironmentIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsElasticBeanstalkEnvironmentArgsIntterface;
	attrs: AwsElasticBeanstalkEnvironmentAttrsIntterface;

}
