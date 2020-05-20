import {
  AwsInstanceArgsCpuCoreCountIntterface,
  AwsInstanceArgsCreditSpecificationIntterface,
  AwsInstanceArgsEbsBlockDeviceIntterface,
  AwsInstanceArgsEphemeralBlockDeviceIntterface,
  AwsInstanceArgsNetworkInterfaceIntterface,
  AwsInstanceArgsRootBlockDeviceIntterface,
} from '.';

export interface AwsInstanceArgsIntterface {
  ami: string;
  availability_zone?: string;
  placement_group?: string;
  tenancy?: string;
  host_id: string;
  cpu_core_count?: AwsInstanceArgsCpuCoreCountIntterface;
  cpu_threads_per_core: string;
  vpc_security_group_ids: string;
  subnet_id?: string;
  associate_public_ip_address?: boolean;
  private_ip?: string;
  source_dest_check?: string;
  user_data?: string;
  user_data_base64?: string;
  iam_instance_profile?: string;
  ipv6_address_count?: string;
  ipv6_addresses?: string;
  tags?: string;
  volume_tags?: string;
  root_block_device?: AwsInstanceArgsRootBlockDeviceIntterface;
  ebs_block_device?: AwsInstanceArgsEbsBlockDeviceIntterface;
  ephemeral_block_device?: AwsInstanceArgsEphemeralBlockDeviceIntterface;
  network_interface?: AwsInstanceArgsNetworkInterfaceIntterface;
  credit_specification?: AwsInstanceArgsCreditSpecificationIntterface;
  create: string;
  update: string;
  delete: string;

}
