import { AwsCodebuildWebhookArgsIntterface, AwsCodebuildWebhookAttrsIntterface } from '.';

export interface AwsCodebuildWebhookIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodebuildWebhookArgsIntterface;
	attrs: AwsCodebuildWebhookAttrsIntterface;

}
