import { AwsOpsworksNodejsAppLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksNodejsAppLayerArgsEbsVolume implements AwsOpsworksNodejsAppLayerArgsEbsVolumeIntterface {
  mount_point: string;
  size: string;
  number_of_disks: string;
  raid_level: string;
  type?: string;
  iops?: string;

}
