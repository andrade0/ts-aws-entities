import { AwsVpcArgsIntterface } from '../interfaces';


export class AwsVpcArgs implements AwsVpcArgsIntterface {
  cidr_block: string;
  instance_tenancy?: string;
  enable_dns_support?: string;
  enable_dns_hostnames?: string;
  enable_classiclink?: string;
  enable_classiclink_dns_support?: string;
  assign_generated_ipv6_cidr_block?: string;
  tags?: string;

}
