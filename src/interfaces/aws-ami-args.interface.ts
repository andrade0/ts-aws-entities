import {
  AwsAmiArgsEbsBlockDeviceIntterface,
  AwsAmiArgsEphemeralBlockDeviceIntterface,
  AwsAmiArgsVirtualizationTypeIntterface,
} from '.';

export interface AwsAmiArgsIntterface {
  name: string;
  description?: string;
  ena_support?: string;
  root_device_name?: string;
  virtualization_type?: AwsAmiArgsVirtualizationTypeIntterface;
  architecture?: string;
  ebs_block_device?: AwsAmiArgsEbsBlockDeviceIntterface;
  ephemeral_block_device?: AwsAmiArgsEphemeralBlockDeviceIntterface;
  tags?: string;
  create: string;
  update: string;
  delete: string;

}
