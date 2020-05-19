import { AwsElasticBeanstalkConfigurationTemplateIntterface } from '../interfaces';
import { AwsElasticBeanstalkConfigurationTemplateArgs,  AwsElasticBeanstalkConfigurationTemplateAttrs } from '.';

export class AwsElasticBeanstalkConfigurationTemplate implements AwsElasticBeanstalkConfigurationTemplateIntterface {
  	name: string = 'aws_elastic_beanstalk_configuration_template';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html';
	groupName: string = 'Elastic Beanstalk Resources';
	args: AwsElasticBeanstalkConfigurationTemplateArgs;
	attrs: AwsElasticBeanstalkConfigurationTemplateAttrs;

}
