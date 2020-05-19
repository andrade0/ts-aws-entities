import { AwsElasticBeanstalkConfigurationTemplateArgsSettingIntterface } from '.';

export interface AwsElasticBeanstalkConfigurationTemplateArgsIntterface {
  	name: string;
	application: string;
	description?: string;
	environment_id?: string;
	setting?: AwsElasticBeanstalkConfigurationTemplateArgsSettingIntterface;
	solution_stack_name?: string;

}
