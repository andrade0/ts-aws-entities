import { AwsAmiArgsVirtualizationTypeIntterface } from '../interfaces';


export class AwsAmiArgsVirtualizationType implements AwsAmiArgsVirtualizationTypeIntterface {
  	image_location: string;
	kernel_id: string;
	ramdisk_id?: string;
	sriov_net_support?: string;

}
