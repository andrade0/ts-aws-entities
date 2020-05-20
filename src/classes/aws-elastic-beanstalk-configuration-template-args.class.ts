import { AwsElasticBeanstalkConfigurationTemplateArgsIntterface } from '../interfaces';
import { AwsElasticBeanstalkConfigurationTemplateArgsSetting } from '.';

export class AwsElasticBeanstalkConfigurationTemplateArgs implements AwsElasticBeanstalkConfigurationTemplateArgsIntterface {
  name: string;
  application: string;
  description?: string;
  environment_id?: string;
  setting?: AwsElasticBeanstalkConfigurationTemplateArgsSetting;
  solution_stack_name?: string;

}
