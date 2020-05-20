import {
  AwsElasticsearchDomainArgsClusterConfigIntterface,
  AwsElasticsearchDomainArgsEbsOptionsIntterface,
  AwsElasticsearchDomainArgsEncryptAtRestIntterface,
  AwsElasticsearchDomainArgsLogPublishingOptionsIntterface,
  AwsElasticsearchDomainArgsNodeToNodeEncryptionIntterface,
  AwsElasticsearchDomainArgsSnapshotOptionsIntterface,
  AwsElasticsearchDomainArgsVpcOptionsIntterface,
} from '.';

export interface AwsElasticsearchDomainArgsIntterface {
  domain_name: string;
  access_policies?: string;
  advanced_options?: string;
  ebs_options?: AwsElasticsearchDomainArgsEbsOptionsIntterface;
  encrypt_at_rest?: AwsElasticsearchDomainArgsEncryptAtRestIntterface;
  node_to_node_encryption?: AwsElasticsearchDomainArgsNodeToNodeEncryptionIntterface;
  cluster_config?: AwsElasticsearchDomainArgsClusterConfigIntterface;
  snapshot_options?: AwsElasticsearchDomainArgsSnapshotOptionsIntterface;
  vpc_options?: AwsElasticsearchDomainArgsVpcOptionsIntterface;
  log_publishing_options?: AwsElasticsearchDomainArgsLogPublishingOptionsIntterface;
  elasticsearch_version?: string;
  tags?: string;
  enabled: string;
  user_pool_id: string;
  identity_pool_id: string;
  role_arn: string;

}
