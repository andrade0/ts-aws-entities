import { AwsAmiArgsIntterface } from '../interfaces';
import { AwsAmiArgsEbsBlockDevice, AwsAmiArgsEphemeralBlockDevice, AwsAmiArgsVirtualizationType } from '.';

export class AwsAmiArgs implements AwsAmiArgsIntterface {
  name: string;
  description?: string;
  ena_support?: string;
  root_device_name?: string;
  virtualization_type?: AwsAmiArgsVirtualizationType;
  architecture?: string;
  ebs_block_device?: AwsAmiArgsEbsBlockDevice;
  ephemeral_block_device?: AwsAmiArgsEphemeralBlockDevice;
  tags?: string;
  create: string;
  update: string;
  delete: string;

}
