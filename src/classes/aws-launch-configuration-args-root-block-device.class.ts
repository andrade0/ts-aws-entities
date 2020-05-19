import { AwsLaunchConfigurationArgsRootBlockDeviceIntterface } from '../interfaces';


export class AwsLaunchConfigurationArgsRootBlockDevice implements AwsLaunchConfigurationArgsRootBlockDeviceIntterface {
  	volume_type?: string;
	volume_size?: string;
	iops?: string;
	delete_on_termination?: string;

}
