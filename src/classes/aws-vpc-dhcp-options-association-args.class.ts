import { AwsVpcDhcpOptionsAssociationArgsIntterface } from '../interfaces';


export class AwsVpcDhcpOptionsAssociationArgs implements AwsVpcDhcpOptionsAssociationArgsIntterface {
  vpc_id: string;
  dhcp_options_id: string;
  default: string;

}
