import { AwsNetworkAclsArgsIntterface } from '../interfaces';
import { AwsNetworkAclsArgsFilter } from '.';

export class AwsNetworkAclsArgs implements AwsNetworkAclsArgsIntterface {
  vpc_id?: string;
  tags?: string;
  filter?: AwsNetworkAclsArgsFilter;

}
