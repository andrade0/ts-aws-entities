import { AwsEbsSnapshotIdsIntterface } from '../interfaces';
import { AwsEbsSnapshotIdsArgs, AwsEbsSnapshotIdsAttrs } from '.';

export class AwsEbsSnapshotIds implements AwsEbsSnapshotIdsIntterface {
  name: string = 'aws_ebs_snapshot_ids';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html';
  groupName: string = 'Data Sources';
  args: AwsEbsSnapshotIdsArgs;
  attrs: AwsEbsSnapshotIdsAttrs;

}
