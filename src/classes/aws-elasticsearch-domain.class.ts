import { AwsElasticsearchDomainIntterface } from '../interfaces';
import { AwsElasticsearchDomainArgs,  AwsElasticsearchDomainAttrs } from '.';

export class AwsElasticsearchDomain implements AwsElasticsearchDomainIntterface {
  	name: string = 'aws_elasticsearch_domain';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html';
	groupName: string = 'ElasticSearch Resources';
	args: AwsElasticsearchDomainArgs;
	attrs: AwsElasticsearchDomainAttrs;

}
