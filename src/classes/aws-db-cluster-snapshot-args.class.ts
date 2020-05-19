import { AwsDbClusterSnapshotArgsIntterface } from '../interfaces';


export class AwsDbClusterSnapshotArgs implements AwsDbClusterSnapshotArgsIntterface {
  	db_cluster_identifier: string;
	db_cluster_snapshot_identifier: string;

}
