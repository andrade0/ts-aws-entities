export interface AwsDmsEndpointArgsIntterface {
  certificate_arn: string;
  database_name?: string;
  endpoint_id: string;
  endpoint_type: string;
  engine_name: string;
  extra_connection_attributes?: string;
  kms_key_arn: string;
  password?: string;
  port?: string;
  server_name?: string;
  ssl_mode: string;
  tags?: string;
  username?: string;
  service_access_role?: string;
  mongodb_settings?: string;
  s3_settings?: string;

}
