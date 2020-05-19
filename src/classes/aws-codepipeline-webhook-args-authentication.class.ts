import { AwsCodepipelineWebhookArgsAuthenticationIntterface } from '../interfaces';


export class AwsCodepipelineWebhookArgsAuthentication implements AwsCodepipelineWebhookArgsAuthenticationIntterface {
  	secret_token?: string;
	allowed_ip_range?: string;

}
