import { AwsNetworkAclArgsIngressIntterface } from '.';

export interface AwsNetworkAclArgsIntterface {
  vpc_id: string;
  subnet_ids?: string;
  subnet_id: string;
  ingress?: AwsNetworkAclArgsIngressIntterface;
  egress?: string;
  tags?: string;

}
