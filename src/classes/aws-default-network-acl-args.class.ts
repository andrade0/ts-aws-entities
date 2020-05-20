import { AwsDefaultNetworkAclArgsIntterface } from '../interfaces';
import { AwsDefaultNetworkAclArgsIngress } from '.';

export class AwsDefaultNetworkAclArgs implements AwsDefaultNetworkAclArgsIntterface {
  default_network_acl_id: string;
  subnet_ids?: string;
  ingress?: AwsDefaultNetworkAclArgsIngress;
  egress?: string;
  tags?: string;

}
