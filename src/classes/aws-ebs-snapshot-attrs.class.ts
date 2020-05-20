import { AwsEbsSnapshotAttrsIntterface } from '../interfaces';


export class AwsEbsSnapshotAttrs implements AwsEbsSnapshotAttrsIntterface {
  id?: string;
  owner_id?: string;
  owner_alias?: string;
  encrypted?: string;
  volume_size?: string;
  kms_key_id?: string;
  data_encryption_key_id?: string;
  tags?: string;

}
