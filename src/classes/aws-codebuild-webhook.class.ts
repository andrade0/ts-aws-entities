import { AwsCodebuildWebhookIntterface } from '../interfaces';
import { AwsCodebuildWebhookArgs,  AwsCodebuildWebhookAttrs } from '.';

export class AwsCodebuildWebhook implements AwsCodebuildWebhookIntterface {
  	name: string = 'aws_codebuild_webhook';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html';
	groupName: string = 'CodeBuild Resources';
	args: AwsCodebuildWebhookArgs;
	attrs: AwsCodebuildWebhookAttrs;

}
