import { AwsAppsyncApiKeyIntterface } from '../interfaces';
import { AwsAppsyncApiKeyArgs,  AwsAppsyncApiKeyAttrs } from '.';

export class AwsAppsyncApiKey implements AwsAppsyncApiKeyIntterface {
  	name: string = 'aws_appsync_api_key';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/appsync_api_key.html';
	groupName: string = 'AppSync Resources';
	args: AwsAppsyncApiKeyArgs;
	attrs: AwsAppsyncApiKeyAttrs;

}
