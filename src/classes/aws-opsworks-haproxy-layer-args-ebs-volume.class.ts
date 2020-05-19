import { AwsOpsworksHaproxyLayerArgsEbsVolumeIntterface } from '../interfaces';


export class AwsOpsworksHaproxyLayerArgsEbsVolume implements AwsOpsworksHaproxyLayerArgsEbsVolumeIntterface {
  	mount_point: string;
	size: string;
	number_of_disks: string;
	raid_level: string;
	type?: string;
	iops?: string;

}
