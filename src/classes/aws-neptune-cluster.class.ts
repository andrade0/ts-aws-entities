import { AwsNeptuneClusterIntterface } from '../interfaces';
import { AwsNeptuneClusterArgs,  AwsNeptuneClusterAttrs } from '.';

export class AwsNeptuneCluster implements AwsNeptuneClusterIntterface {
  	name: string = 'aws_neptune_cluster';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_cluster.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneClusterArgs;
	attrs: AwsNeptuneClusterAttrs;

}
