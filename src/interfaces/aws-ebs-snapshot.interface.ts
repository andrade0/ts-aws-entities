import { AwsEbsSnapshotArgsIntterface, AwsEbsSnapshotAttrsIntterface } from '.';

export interface AwsEbsSnapshotIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEbsSnapshotArgsIntterface;
  attrs: AwsEbsSnapshotAttrsIntterface;

}
