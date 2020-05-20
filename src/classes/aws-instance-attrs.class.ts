import { AwsInstanceAttrsIntterface } from '../interfaces';


export class AwsInstanceAttrs implements AwsInstanceAttrsIntterface {
  id?: string;
  arn?: string;
  availability_zone?: string;
  placement_group?: string;
  key_name?: string;
  password_data?: string;
  public_dns?: string;
  public_ip?: string;
  ipv6_addresses?: string;
  network_interface_id?: string;
  primary_network_interface_id?: string;
  private_dns?: string;
  private_ip?: string;
  security_groups?: string;
  vpc_security_group_ids?: string;
  subnet_id?: string;
  credit_specification?: string;

}
