import { AwsDbClusterSnapshotArgsIntterface, AwsDbClusterSnapshotAttrsIntterface } from '.';

export interface AwsDbClusterSnapshotIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbClusterSnapshotArgsIntterface;
  attrs: AwsDbClusterSnapshotAttrsIntterface;

}
