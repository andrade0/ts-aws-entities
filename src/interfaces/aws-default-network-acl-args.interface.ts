import { AwsDefaultNetworkAclArgsIngressIntterface } from '.';

export interface AwsDefaultNetworkAclArgsIntterface {
  default_network_acl_id: string;
  subnet_ids?: string;
  ingress?: AwsDefaultNetworkAclArgsIngressIntterface;
  egress?: string;
  tags?: string;

}
