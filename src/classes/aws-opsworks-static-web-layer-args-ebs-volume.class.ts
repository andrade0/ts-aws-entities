import { AwsOpsworksStaticWebLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksStaticWebLayerArgsEbsVolume implements AwsOpsworksStaticWebLayerArgsEbsVolumeIntterface {
  mount_point: string;
  size: string;
  number_of_disks: string;
  raid_level: string;
  type?: string;
  iops?: string;

}
