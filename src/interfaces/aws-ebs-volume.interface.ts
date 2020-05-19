import { AwsEbsVolumeArgsIntterface, AwsEbsVolumeAttrsIntterface } from '.';

export interface AwsEbsVolumeIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEbsVolumeArgsIntterface;
	attrs: AwsEbsVolumeAttrsIntterface;

}
