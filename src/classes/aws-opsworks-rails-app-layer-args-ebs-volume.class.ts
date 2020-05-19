import { AwsOpsworksRailsAppLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksRailsAppLayerArgsEbsVolume implements AwsOpsworksRailsAppLayerArgsEbsVolumeIntterface {
  	mount_point: string;
	size: string;
	number_of_disks: string;
	raid_level: string;
	type?: string;
	iops?: string;

}
