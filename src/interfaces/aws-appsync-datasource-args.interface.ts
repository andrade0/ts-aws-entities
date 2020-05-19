

export interface AwsAppsyncDatasourceArgsIntterface {
  	api_id: string;
	name: string;
	type: string;
	description?: string;
	service_role_arn?: string;
	dynamodb_config?: string;
	elasticsearch_config?: string;
	http_config?: string;
	lambda_config?: string;
	table_name: string;
	region?: string;
	use_caller_credentials?: string;
	endpoint: string;
	function_arn: string;

}
