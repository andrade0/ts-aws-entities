import { AwsElasticsearchDomainArgsIntterface, AwsElasticsearchDomainAttrsIntterface } from '.';

export interface AwsElasticsearchDomainIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsElasticsearchDomainArgsIntterface;
  attrs: AwsElasticsearchDomainAttrsIntterface;

}
