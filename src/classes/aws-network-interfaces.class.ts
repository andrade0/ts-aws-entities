import { AwsNetworkInterfacesIntterface } from '../interfaces';
import { AwsNetworkInterfacesArgs, AwsNetworkInterfacesAttrs } from '.';

export class AwsNetworkInterfaces implements AwsNetworkInterfacesIntterface {
  name: string = 'aws_network_interfaces';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/network_interfaces.html';
  groupName: string = 'Data Sources';
  args: AwsNetworkInterfacesArgs;
  attrs: AwsNetworkInterfacesAttrs;

}
