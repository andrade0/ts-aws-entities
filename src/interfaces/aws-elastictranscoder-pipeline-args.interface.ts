import {
  AwsElastictranscoderPipelineArgsContentConfigIntterface,
  AwsElastictranscoderPipelineArgsNotificationsIntterface,
  AwsElastictranscoderPipelineArgsThumbnailConfigIntterface,
} from '.';

export interface AwsElastictranscoderPipelineArgsIntterface {
  aws_kms_key_arn?: string;
  content_config?: AwsElastictranscoderPipelineArgsContentConfigIntterface;
  content_config_permissions?: string;
  input_bucket: string;
  name: string;
  notifications?: AwsElastictranscoderPipelineArgsNotificationsIntterface;
  output_bucket?: string;
  role: string;
  thumbnail_config?: AwsElastictranscoderPipelineArgsThumbnailConfigIntterface;
  thumbnail_config_permissions?: string;

}
