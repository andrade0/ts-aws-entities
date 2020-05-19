import { AwsElasticsearchDomainArgsIntterface } from '../interfaces';
import { AwsElasticsearchDomainArgsEbsOptions,  AwsElasticsearchDomainArgsEncryptAtRest,  AwsElasticsearchDomainArgsNodeToNodeEncryption,  AwsElasticsearchDomainArgsClusterConfig,  AwsElasticsearchDomainArgsSnapshotOptions,  AwsElasticsearchDomainArgsVpcOptions,  AwsElasticsearchDomainArgsLogPublishingOptions } from '.';

export class AwsElasticsearchDomainArgs implements AwsElasticsearchDomainArgsIntterface {
  	domain_name: string;
	access_policies?: string;
	advanced_options?: string;
	ebs_options?: AwsElasticsearchDomainArgsEbsOptions;
	encrypt_at_rest?: AwsElasticsearchDomainArgsEncryptAtRest;
	node_to_node_encryption?: AwsElasticsearchDomainArgsNodeToNodeEncryption;
	cluster_config?: AwsElasticsearchDomainArgsClusterConfig;
	snapshot_options?: AwsElasticsearchDomainArgsSnapshotOptions;
	vpc_options?: AwsElasticsearchDomainArgsVpcOptions;
	log_publishing_options?: AwsElasticsearchDomainArgsLogPublishingOptions;
	elasticsearch_version?: string;
	tags?: string;
	enabled: string;
	user_pool_id: string;
	identity_pool_id: string;
	role_arn: string;

}
