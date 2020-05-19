import { AwsAppsyncGraphqlApiIntterface } from '../interfaces';
import { AwsAppsyncGraphqlApiArgs,  AwsAppsyncGraphqlApiAttrs } from '.';

export class AwsAppsyncGraphqlApi implements AwsAppsyncGraphqlApiIntterface {
  	name: string = 'aws_appsync_graphql_api';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api.html';
	groupName: string = 'AppSync Resources';
	args: AwsAppsyncGraphqlApiArgs;
	attrs: AwsAppsyncGraphqlApiAttrs;

}
