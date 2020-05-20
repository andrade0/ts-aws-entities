import { AwsVpcDhcpOptionsArgsIntterface } from '../interfaces';


export class AwsVpcDhcpOptionsArgs implements AwsVpcDhcpOptionsArgsIntterface {
  domain_name?: string;
  domain_name_servers?: string;
  ntp_servers?: string;
  netbios_name_servers?: string;
  netbios_node_type?: string;
  tags?: string;
  aws_vpc_dhcp_options_association: string;
  default: string;

}
