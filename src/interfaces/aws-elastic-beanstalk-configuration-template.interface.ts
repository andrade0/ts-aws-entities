import {
  AwsElasticBeanstalkConfigurationTemplateArgsIntterface,
  AwsElasticBeanstalkConfigurationTemplateAttrsIntterface,
} from '.';

export interface AwsElasticBeanstalkConfigurationTemplateIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsElasticBeanstalkConfigurationTemplateArgsIntterface;
  attrs: AwsElasticBeanstalkConfigurationTemplateAttrsIntterface;

}
