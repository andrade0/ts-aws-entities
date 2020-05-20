import { AwsOpsworksInstanceArgsEbsBlockDeviceIntterface } from '../interfaces';


export class AwsOpsworksInstanceArgsEbsBlockDevice implements AwsOpsworksInstanceArgsEbsBlockDeviceIntterface {
  device_name: string;
  snapshot_id?: string;
  volume_type?: string;
  volume_size?: string;
  iops?: string;
  delete_on_termination?: string;

}
