import { AwsRedshiftSnapshotCopyGrantIntterface } from '../interfaces';
import { AwsRedshiftSnapshotCopyGrantArgs,  AwsRedshiftSnapshotCopyGrantAttrs } from '.';

export class AwsRedshiftSnapshotCopyGrant implements AwsRedshiftSnapshotCopyGrantIntterface {
  	name: string = 'aws_redshift_snapshot_copy_grant';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_copy_grant.html';
	groupName: string = 'Redshift Resources';
	args: AwsRedshiftSnapshotCopyGrantArgs;
	attrs: AwsRedshiftSnapshotCopyGrantAttrs;

}
