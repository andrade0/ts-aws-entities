import { AwsCodepipelineWebhookArgsIntterface, AwsCodepipelineWebhookAttrsIntterface } from '.';

export interface AwsCodepipelineWebhookIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCodepipelineWebhookArgsIntterface;
  attrs: AwsCodepipelineWebhookAttrsIntterface;

}
