import { AwsElasticBeanstalkEnvironmentArgsSettingIntterface } from '../interfaces';


export class AwsElasticBeanstalkEnvironmentArgsSetting implements AwsElasticBeanstalkEnvironmentArgsSettingIntterface {
  namespace: string;
  name: string;
  value: string;
  resource?: string;

}
