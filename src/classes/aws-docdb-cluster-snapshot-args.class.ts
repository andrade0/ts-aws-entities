import { AwsDocdbClusterSnapshotArgsIntterface } from '../interfaces';


export class AwsDocdbClusterSnapshotArgs implements AwsDocdbClusterSnapshotArgsIntterface {
  db_cluster_identifier: string;
  db_cluster_snapshot_identifier: string;

}
