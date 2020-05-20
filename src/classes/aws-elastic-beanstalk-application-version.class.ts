import { AwsElasticBeanstalkApplicationVersionIntterface } from '../interfaces';
import { AwsElasticBeanstalkApplicationVersionArgs, AwsElasticBeanstalkApplicationVersionAttrs } from '.';

export class AwsElasticBeanstalkApplicationVersion implements AwsElasticBeanstalkApplicationVersionIntterface {
  name: string = 'aws_elastic_beanstalk_application_version';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html';
  groupName: string = 'Elastic Beanstalk Resources';
  args: AwsElasticBeanstalkApplicationVersionArgs;
  attrs: AwsElasticBeanstalkApplicationVersionAttrs;

}
