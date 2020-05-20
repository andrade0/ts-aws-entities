import { AwsInstanceArgsRootBlockDeviceIntterface } from '../interfaces';


export class AwsInstanceArgsRootBlockDevice implements AwsInstanceArgsRootBlockDeviceIntterface {
  volume_type?: string;
  volume_size?: string;
  iops?: string;
  delete_on_termination?: string;

}
