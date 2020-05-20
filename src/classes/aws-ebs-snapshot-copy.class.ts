import { AwsEbsSnapshotCopyIntterface } from '../interfaces';
import { AwsEbsSnapshotCopyArgs, AwsEbsSnapshotCopyAttrs } from '.';

export class AwsEbsSnapshotCopy implements AwsEbsSnapshotCopyIntterface {
  name: string = 'aws_ebs_snapshot_copy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy.html';
  groupName: string = 'EC2 Resources';
  args: AwsEbsSnapshotCopyArgs;
  attrs: AwsEbsSnapshotCopyAttrs;

}
