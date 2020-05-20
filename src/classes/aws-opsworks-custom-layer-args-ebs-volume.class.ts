import { AwsOpsworksCustomLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksCustomLayerArgsEbsVolume implements AwsOpsworksCustomLayerArgsEbsVolumeIntterface {
  mount_point: string;
  size: string;
  number_of_disks: string;
  raid_level: string;
  type?: string;
  iops?: string;

}
