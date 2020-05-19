import { AwsElasticBeanstalkHostedZoneIntterface } from '../interfaces';
import { AwsElasticBeanstalkHostedZoneArgs,  AwsElasticBeanstalkHostedZoneAttrs } from '.';

export class AwsElasticBeanstalkHostedZone implements AwsElasticBeanstalkHostedZoneIntterface {
  	name: string = 'aws_elastic_beanstalk_hosted_zone';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html';
	groupName: string = 'Data Sources';
	args: AwsElasticBeanstalkHostedZoneArgs;
	attrs: AwsElasticBeanstalkHostedZoneAttrs;

}
