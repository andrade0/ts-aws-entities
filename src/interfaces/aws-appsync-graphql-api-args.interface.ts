

export interface AwsAppsyncGraphqlApiArgsIntterface {
  	authentication_type: string;
	name: string;
	log_config?: string;
	openid_connect_config?: string;
	user_pool_config?: string;
	cloudwatch_logs_role_arn: string;
	field_log_level: string;
	issuer: string;
	auth_ttl?: number;
	client_id?: string;
	iat_ttl?: number;
	default_action: string;
	user_pool_id: string;
	app_id_client_regex?: string;
	aws_region?: string;

}
