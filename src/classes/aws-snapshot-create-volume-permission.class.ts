import { AwsSnapshotCreateVolumePermissionIntterface } from '../interfaces';
import { AwsSnapshotCreateVolumePermissionArgs, AwsSnapshotCreateVolumePermissionAttrs } from '.';

export class AwsSnapshotCreateVolumePermission implements AwsSnapshotCreateVolumePermissionIntterface {
  name: string = 'aws_snapshot_create_volume_permission';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/snapshot_create_volume_permission.html';
  groupName: string = 'EC2 Resources';
  args: AwsSnapshotCreateVolumePermissionArgs;
  attrs: AwsSnapshotCreateVolumePermissionAttrs;

}
