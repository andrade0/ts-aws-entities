import { AwsDbSnapshotArgsIntterface, AwsDbSnapshotAttrsIntterface } from '.';

export interface AwsDbSnapshotIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbSnapshotArgsIntterface;
  attrs: AwsDbSnapshotAttrsIntterface;

}
