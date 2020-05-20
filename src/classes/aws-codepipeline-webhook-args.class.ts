import { AwsCodepipelineWebhookArgsIntterface } from '../interfaces';
import { AwsCodepipelineWebhookArgsAuthentication, AwsCodepipelineWebhookArgsFilter } from '.';

export class AwsCodepipelineWebhookArgs implements AwsCodepipelineWebhookArgsIntterface {
  name: string;
  authentication: AwsCodepipelineWebhookArgsAuthentication;
  authentication_configuration?: string;
  filter: AwsCodepipelineWebhookArgsFilter;
  target_action: string;
  target_pipeline: string;

}
