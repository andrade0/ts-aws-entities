import { AwsInstanceArgsIntterface } from '../interfaces';
import {
  AwsInstanceArgsCpuCoreCount,
  AwsInstanceArgsCreditSpecification,
  AwsInstanceArgsEbsBlockDevice,
  AwsInstanceArgsEphemeralBlockDevice,
  AwsInstanceArgsNetworkInterface,
  AwsInstanceArgsRootBlockDevice,
} from '.';

export class AwsInstanceArgs implements AwsInstanceArgsIntterface {
  ami: string;
  availability_zone?: string;
  placement_group?: string;
  tenancy?: string;
  host_id: string;
  cpu_core_count?: AwsInstanceArgsCpuCoreCount;
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
  root_block_device?: AwsInstanceArgsRootBlockDevice;
  ebs_block_device?: AwsInstanceArgsEbsBlockDevice;
  ephemeral_block_device?: AwsInstanceArgsEphemeralBlockDevice;
  network_interface?: AwsInstanceArgsNetworkInterface;
  credit_specification?: AwsInstanceArgsCreditSpecification;
  create: string;
  update: string;
  delete: string;

}
