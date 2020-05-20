export interface AwsSecurityGroupArgsIngressIntterface {
  cidr_blocks?: string;
  ipv6_cidr_blocks?: string;
  prefix_list_ids?: string;
  from_port: string;
  protocol: string;
  security_groups?: string;
  self?: string;
  to_port: string;
  description?: string;

}
