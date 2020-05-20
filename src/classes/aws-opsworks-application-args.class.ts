import { AwsOpsworksApplicationArgsIntterface } from '../interfaces';
import {
  AwsOpsworksApplicationArgsAppSource,
  AwsOpsworksApplicationArgsEnvironment,
  AwsOpsworksApplicationArgsSslConfiguration,
} from '.';

export class AwsOpsworksApplicationArgs implements AwsOpsworksApplicationArgsIntterface {
  name: string;
  short_name: string;
  stack_id: string;
  type: string;
  description?: string;
  environment?: AwsOpsworksApplicationArgsEnvironment;
  enable_ssl?: string;
  ssl_configuration?: AwsOpsworksApplicationArgsSslConfiguration;
  app_source?: AwsOpsworksApplicationArgsAppSource;
  data_source_arn?: string;
  data_source_type?: string;
  data_source_database_name?: string;
  domains?: string;
  document_root?: string;
  auto_bundle_on_deploy?: string;
  rails_env: string;
  aws_flow_ruby_settings?: string;

}
