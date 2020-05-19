import { AwsElastictranscoderPipelineArgsIntterface } from '../interfaces';
import { AwsElastictranscoderPipelineArgsContentConfig,  AwsElastictranscoderPipelineArgsNotifications,  AwsElastictranscoderPipelineArgsThumbnailConfig } from '.';

export class AwsElastictranscoderPipelineArgs implements AwsElastictranscoderPipelineArgsIntterface {
  	aws_kms_key_arn?: string;
	content_config?: AwsElastictranscoderPipelineArgsContentConfig;
	content_config_permissions?: string;
	input_bucket: string;
	name: string;
	notifications?: AwsElastictranscoderPipelineArgsNotifications;
	output_bucket?: string;
	role: string;
	thumbnail_config?: AwsElastictranscoderPipelineArgsThumbnailConfig;
	thumbnail_config_permissions?: string;

}
