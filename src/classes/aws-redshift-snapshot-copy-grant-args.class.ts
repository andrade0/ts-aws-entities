import { AwsRedshiftSnapshotCopyGrantArgsIntterface } from '../interfaces';


export class AwsRedshiftSnapshotCopyGrantArgs implements AwsRedshiftSnapshotCopyGrantArgsIntterface {
  snapshot_copy_grant_name: string;
  kms_key_id: string;
  tags?: string;

}
