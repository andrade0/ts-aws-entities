import { AwsEbsVolumeArgsIntterface } from '../interfaces';


export class AwsEbsVolumeArgs implements AwsEbsVolumeArgsIntterface {
  availability_zone: string;
  encrypted?: string;
  iops?: string;
  size?: string;
  snapshot_id?: string;
  type?: string;
  kms_key_id?: string;
  tags?: string;

}
