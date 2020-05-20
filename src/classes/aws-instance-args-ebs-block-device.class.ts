import { AwsInstanceArgsEbsBlockDeviceIntterface } from '../interfaces';


export class AwsInstanceArgsEbsBlockDevice implements AwsInstanceArgsEbsBlockDeviceIntterface {
  device_name: string;
  snapshot_id?: string;
  volume_type?: string;
  volume_size?: string;
  iops?: string;
  delete_on_termination?: string;
  encrypted?: string;

}
