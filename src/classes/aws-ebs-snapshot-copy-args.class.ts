import { AwsEbsSnapshotCopyArgsIntterface } from '../interfaces';


export class AwsEbsSnapshotCopyArgs implements AwsEbsSnapshotCopyArgsIntterface {
  description?: string;
  encrypted: string;
  kms_key_id: string;
  source_snapshot_id: string;
  source_region: string;
  tags: string;

}
