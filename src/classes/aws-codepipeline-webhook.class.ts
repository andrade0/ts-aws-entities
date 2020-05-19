import { AwsCodepipelineWebhookIntterface } from '../interfaces';
import { AwsCodepipelineWebhookArgs,  AwsCodepipelineWebhookAttrs } from '.';

export class AwsCodepipelineWebhook implements AwsCodepipelineWebhookIntterface {
  	name: string = 'aws_codepipeline_webhook';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html';
	groupName: string = 'CodePipeline Resources';
	args: AwsCodepipelineWebhookArgs;
	attrs: AwsCodepipelineWebhookAttrs;

}
