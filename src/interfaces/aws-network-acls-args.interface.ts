import { AwsNetworkAclsArgsFilterIntterface } from '.';

export interface AwsNetworkAclsArgsIntterface {
  vpc_id?: string;
  tags?: string;
  filter?: AwsNetworkAclsArgsFilterIntterface;

}
