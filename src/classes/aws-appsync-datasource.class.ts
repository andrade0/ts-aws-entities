import { AwsAppsyncDatasourceIntterface } from '../interfaces';
import { AwsAppsyncDatasourceArgs,  AwsAppsyncDatasourceAttrs } from '.';

export class AwsAppsyncDatasource implements AwsAppsyncDatasourceIntterface {
  	name: string = 'aws_appsync_datasource';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/appsync_datasource.html';
	groupName: string = 'AppSync Resources';
	args: AwsAppsyncDatasourceArgs;
	attrs: AwsAppsyncDatasourceAttrs;

}
