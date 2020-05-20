import { AwsOpsworksInstanceArgsIntterface } from '../interfaces';
import {
  AwsOpsworksInstanceArgsEbsBlockDevice,
  AwsOpsworksInstanceArgsEphemeralBlockDevice,
  AwsOpsworksInstanceArgsRootBlockDevice,
} from '.';

export class AwsOpsworksInstanceArgs implements AwsOpsworksInstanceArgsIntterface {
  instance_type: string;
  stack_id: string;
  layer_ids: string;
  state?: string;
  install_updates_on_boot?: string;
  auto_scaling_type?: string;
  availability_zone?: string;
  ebs_optimized?: string;
  hostname?: string;
  architecture?: string;
  ami_id?: string;
  os?: string;
  root_device_type?: string;
  ssh_key_name?: string;
  agent_version?: string;
  subnet_id?: string;
  tenancy?: string;
  virtualization_type?: string;
  root_block_device?: AwsOpsworksInstanceArgsRootBlockDevice;
  ebs_block_device?: AwsOpsworksInstanceArgsEbsBlockDevice;
  ephemeral_block_device?: AwsOpsworksInstanceArgsEphemeralBlockDevice;

}
