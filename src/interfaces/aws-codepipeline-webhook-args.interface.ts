import { AwsCodepipelineWebhookArgsAuthenticationIntterface, AwsCodepipelineWebhookArgsFilterIntterface } from '.';

export interface AwsCodepipelineWebhookArgsIntterface {
  name: string;
  authentication: AwsCodepipelineWebhookArgsAuthenticationIntterface;
  authentication_configuration?: string;
  filter: AwsCodepipelineWebhookArgsFilterIntterface;
  target_action: string;
  target_pipeline: string;

}
