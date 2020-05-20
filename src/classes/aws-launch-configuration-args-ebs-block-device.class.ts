import { AwsLaunchConfigurationArgsEbsBlockDeviceIntterface } from '../interfaces';


export class AwsLaunchConfigurationArgsEbsBlockDevice implements AwsLaunchConfigurationArgsEbsBlockDeviceIntterface {
  device_name: string;
  snapshot_id?: string;
  volume_type?: string;
  volume_size?: string;
  iops?: string;
  delete_on_termination?: string;
  encrypted?: string;

}
