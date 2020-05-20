import { AwsDocdbClusterSnapshotIntterface } from '../interfaces';
import { AwsDocdbClusterSnapshotArgs, AwsDocdbClusterSnapshotAttrs } from '.';

export class AwsDocdbClusterSnapshot implements AwsDocdbClusterSnapshotIntterface {
  name: string = 'aws_docdb_cluster_snapshot';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/docdb_cluster_snapshot.html';
  groupName: string = 'DocumentDB Resources';
  args: AwsDocdbClusterSnapshotArgs;
  attrs: AwsDocdbClusterSnapshotAttrs;

}
