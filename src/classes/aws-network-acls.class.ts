import { AwsNetworkAclsIntterface } from '../interfaces';
import { AwsNetworkAclsArgs, AwsNetworkAclsAttrs } from '.';

export class AwsNetworkAcls implements AwsNetworkAclsIntterface {
  name: string = 'aws_network_acls';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/network_acls.html';
  groupName: string = 'Data Sources';
  args: AwsNetworkAclsArgs;
  attrs: AwsNetworkAclsAttrs;

}
