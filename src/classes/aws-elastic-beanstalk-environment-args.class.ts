import { AwsElasticBeanstalkEnvironmentArgsIntterface } from '../interfaces';
import { AwsElasticBeanstalkEnvironmentArgsSetting } from '.';

export class AwsElasticBeanstalkEnvironmentArgs implements AwsElasticBeanstalkEnvironmentArgsIntterface {
  	name: string;
	application: string;
	cname_prefix?: string;
	description?: string;
	tier?: string;
	setting?: AwsElasticBeanstalkEnvironmentArgsSetting;
	solution_stack_name?: string;
	template_name?: string;
	platform_arn?: string;
	wait_for_ready_timeout: string;
	poll_interval: string;
	version_label?: string;
	tags?: string;

}
