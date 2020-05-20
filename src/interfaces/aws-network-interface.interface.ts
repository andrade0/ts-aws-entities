import { AwsNetworkInterfaceArgsIntterface, AwsNetworkInterfaceAttrsIntterface } from '.';

export interface AwsNetworkInterfaceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNetworkInterfaceArgsIntterface;
  attrs: AwsNetworkInterfaceAttrsIntterface;

}
