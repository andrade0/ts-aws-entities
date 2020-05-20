import { AwsDefaultNetworkAclArgsIngressIntterface } from '../interfaces';


export class AwsDefaultNetworkAclArgsIngress implements AwsDefaultNetworkAclArgsIngressIntterface {
  from_port: string;
  to_port: string;
  rule_no: string;
  action: string;
  protocol: string;
  cidr_block?: string;
  ipv6_cidr_block?: string;
  icmp_type?: string;
  icmp_code?: string;

}
