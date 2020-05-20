import { AwsNetworkInterfaceIntterface } from '../interfaces';
import { AwsNetworkInterfaceArgs, AwsNetworkInterfaceAttrs } from '.';

export class AwsNetworkInterface implements AwsNetworkInterfaceIntterface {
  name: string = 'aws_network_interface';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/network_interface.html';
  groupName: string = 'VPC Resources';
  args: AwsNetworkInterfaceArgs;
  attrs: AwsNetworkInterfaceAttrs;

}
