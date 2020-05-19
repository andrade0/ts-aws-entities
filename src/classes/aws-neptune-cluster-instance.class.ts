import { AwsNeptuneClusterInstanceIntterface } from '../interfaces';
import { AwsNeptuneClusterInstanceArgs,  AwsNeptuneClusterInstanceAttrs } from '.';

export class AwsNeptuneClusterInstance implements AwsNeptuneClusterInstanceIntterface {
  	name: string = 'aws_neptune_cluster_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneClusterInstanceArgs;
	attrs: AwsNeptuneClusterInstanceAttrs;

}
