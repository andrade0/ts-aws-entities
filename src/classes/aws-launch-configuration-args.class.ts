import { AwsLaunchConfigurationArgsIntterface } from '../interfaces';
import {
  AwsLaunchConfigurationArgsEbsBlockDevice,
  AwsLaunchConfigurationArgsEphemeralBlockDevice,
  AwsLaunchConfigurationArgsRootBlockDevice,
} from '.';

export class AwsLaunchConfigurationArgs implements AwsLaunchConfigurationArgsIntterface {
  name?: string;
  name_prefix?: string;
  image_id: string;
  instance_type: string;
  iam_instance_profile?: string;
  key_name?: string;
  security_groups?: string;
  associate_public_ip_address?: string;
  vpc_classic_link_id?: string;
  vpc_classic_link_security_groups?: string;
  user_data?: string;
  user_data_base64?: string;
  enable_monitoring?: string;
  ebs_optimized?: string;
  root_block_device?: AwsLaunchConfigurationArgsRootBlockDevice;
  ebs_block_device?: AwsLaunchConfigurationArgsEbsBlockDevice;
  ephemeral_block_device?: AwsLaunchConfigurationArgsEphemeralBlockDevice;
  spot_price: string;
  placement_tenancy?: string;

}
