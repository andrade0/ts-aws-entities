import { AwsOpsworksMemcachedLayerIntterface } from '../interfaces';
import { AwsOpsworksMemcachedLayerArgs,  AwsOpsworksMemcachedLayerAttrs } from '.';

export class AwsOpsworksMemcachedLayer implements AwsOpsworksMemcachedLayerIntterface {
  	name: string = 'aws_opsworks_memcached_layer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksMemcachedLayerArgs;
	attrs: AwsOpsworksMemcachedLayerAttrs;

}
