import {
  AwsOpsworksApplicationArgsAppSourceIntterface,
  AwsOpsworksApplicationArgsEnvironmentIntterface,
  AwsOpsworksApplicationArgsSslConfigurationIntterface,
} from '.';

export interface AwsOpsworksApplicationArgsIntterface {
  name: string;
  short_name: string;
  stack_id: string;
  type: string;
  description?: string;
  environment?: AwsOpsworksApplicationArgsEnvironmentIntterface;
  enable_ssl?: string;
  ssl_configuration?: AwsOpsworksApplicationArgsSslConfigurationIntterface;
  app_source?: AwsOpsworksApplicationArgsAppSourceIntterface;
  data_source_arn?: string;
  data_source_type?: string;
  data_source_database_name?: string;
  domains?: string;
  document_root?: string;
  auto_bundle_on_deploy?: string;
  rails_env: string;
  aws_flow_ruby_settings?: string;

}
