import { AwsElasticBeanstalkEnvironmentIntterface } from '../interfaces';
import { AwsElasticBeanstalkEnvironmentArgs,  AwsElasticBeanstalkEnvironmentAttrs } from '.';

export class AwsElasticBeanstalkEnvironment implements AwsElasticBeanstalkEnvironmentIntterface {
  	name: string = 'aws_elastic_beanstalk_environment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html';
	groupName: string = 'Elastic Beanstalk Resources';
	args: AwsElasticBeanstalkEnvironmentArgs;
	attrs: AwsElasticBeanstalkEnvironmentAttrs;

}
