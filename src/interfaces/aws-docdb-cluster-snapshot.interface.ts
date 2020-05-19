import { AwsDocdbClusterSnapshotArgsIntterface, AwsDocdbClusterSnapshotAttrsIntterface } from '.';

export interface AwsDocdbClusterSnapshotIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDocdbClusterSnapshotArgsIntterface;
	attrs: AwsDocdbClusterSnapshotAttrsIntterface;

}
