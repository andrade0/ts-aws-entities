import { AwsGlueCrawlerArgsDynamodbTargetIntterface, AwsGlueCrawlerArgsJdbcTargetIntterface, AwsGlueCrawlerArgsS3TargetIntterface, AwsGlueCrawlerArgsSchemaChangePolicyIntterface } from '.';

export interface AwsGlueCrawlerArgsIntterface {
  	database_name: string;
	name: string;
	role: string;
	classifiers?: string;
	configuration?: string;
	description?: string;
	dynamodb_target?: AwsGlueCrawlerArgsDynamodbTargetIntterface;
	jdbc_target?: AwsGlueCrawlerArgsJdbcTargetIntterface;
	s3_target?: AwsGlueCrawlerArgsS3TargetIntterface;
	schedule?: string;
	schema_change_policy?: AwsGlueCrawlerArgsSchemaChangePolicyIntterface;
	table_prefix?: string;
	security_configuration?: string;

}
