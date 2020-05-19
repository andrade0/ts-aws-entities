import { AwsAppsyncDatasourceArgsIntterface, AwsAppsyncDatasourceAttrsIntterface } from '.';

export interface AwsAppsyncDatasourceIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAppsyncDatasourceArgsIntterface;
	attrs: AwsAppsyncDatasourceAttrsIntterface;

}
