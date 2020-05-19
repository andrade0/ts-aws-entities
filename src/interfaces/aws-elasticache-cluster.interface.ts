import { AwsElasticacheClusterArgsIntterface, AwsElasticacheClusterAttrsIntterface } from '.';

export interface AwsElasticacheClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsElasticacheClusterArgsIntterface;
	attrs: AwsElasticacheClusterAttrsIntterface;

}
