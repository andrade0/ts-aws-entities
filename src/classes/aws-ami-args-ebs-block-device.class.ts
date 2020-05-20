import { AwsAmiArgsEbsBlockDeviceIntterface } from '../interfaces';


export class AwsAmiArgsEbsBlockDevice implements AwsAmiArgsEbsBlockDeviceIntterface {
  device_name: string;
  delete_on_termination?: boolean;
  encrypted?: boolean;
  iops: number;
  snapshot_id?: string;
  volume_size: string;
  volume_type?: string;
  kms_key_id?: string;

}
