import { AwsOpsworksJavaAppLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksJavaAppLayerArgsEbsVolume implements AwsOpsworksJavaAppLayerArgsEbsVolumeIntterface {
  mount_point: string;
  size: string;
  number_of_disks: string;
  raid_level: string;
  type?: string;
  iops?: string;

}
