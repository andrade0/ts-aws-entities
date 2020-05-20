import { AwsElasticBeanstalkApplicationIntterface } from '../interfaces';
import { AwsElasticBeanstalkApplicationArgs, AwsElasticBeanstalkApplicationAttrs } from '.';

export class AwsElasticBeanstalkApplication implements AwsElasticBeanstalkApplicationIntterface {
  name: string = 'aws_elastic_beanstalk_application';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html';
  groupName: string = 'Elastic Beanstalk Resources';
  args: AwsElasticBeanstalkApplicationArgs;
  attrs: AwsElasticBeanstalkApplicationAttrs;

}
