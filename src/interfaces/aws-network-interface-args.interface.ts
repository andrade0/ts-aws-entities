import { AwsNetworkInterfaceArgsAttachmentIntterface } from '.';

export interface AwsNetworkInterfaceArgsIntterface {
  subnet_id: string;
  description?: string;
  private_ips?: string;
  private_ips_count?: number;
  security_groups?: string;
  attachment?: AwsNetworkInterfaceArgsAttachmentIntterface;
  source_dest_check?: string;
  tags?: string;

}
