import { AwsNeptuneClusterSnapshotIntterface } from '../interfaces';
import { AwsNeptuneClusterSnapshotArgs,  AwsNeptuneClusterSnapshotAttrs } from '.';

export class AwsNeptuneClusterSnapshot implements AwsNeptuneClusterSnapshotIntterface {
  	name: string = 'aws_neptune_cluster_snapshot';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_cluster_snapshot.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneClusterSnapshotArgs;
	attrs: AwsNeptuneClusterSnapshotAttrs;

}
