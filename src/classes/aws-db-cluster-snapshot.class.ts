import { AwsDbClusterSnapshotIntterface } from '../interfaces';
import { AwsDbClusterSnapshotArgs, AwsDbClusterSnapshotAttrs } from '.';

export class AwsDbClusterSnapshot implements AwsDbClusterSnapshotIntterface {
  name: string = 'aws_db_cluster_snapshot';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/db_cluster_snapshot.html';
  groupName: string = 'RDS Resources';
  args: AwsDbClusterSnapshotArgs;
  attrs: AwsDbClusterSnapshotAttrs;

}
