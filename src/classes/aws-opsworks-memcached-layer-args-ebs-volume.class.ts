import { AwsOpsworksMemcachedLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksMemcachedLayerArgsEbsVolume implements AwsOpsworksMemcachedLayerArgsEbsVolumeIntterface {
  mount_point: string;
  size: string;
  number_of_disks: string;
  raid_level: string;
  type?: string;
  iops?: string;

}
