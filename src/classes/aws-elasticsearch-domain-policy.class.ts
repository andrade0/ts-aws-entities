import { AwsElasticsearchDomainPolicyIntterface } from '../interfaces';
import { AwsElasticsearchDomainPolicyArgs, AwsElasticsearchDomainPolicyAttrs } from '.';

export class AwsElasticsearchDomainPolicy implements AwsElasticsearchDomainPolicyIntterface {
  name: string = 'aws_elasticsearch_domain_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html';
  groupName: string = 'ElasticSearch Resources';
  args: AwsElasticsearchDomainPolicyArgs;
  attrs: AwsElasticsearchDomainPolicyAttrs;

}
