import {
  AwsServiceDiscoveryPrivateDnsNamespaceArgsIntterface,
  AwsServiceDiscoveryPrivateDnsNamespaceAttrsIntterface,
} from '.';

export interface AwsServiceDiscoveryPrivateDnsNamespaceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsServiceDiscoveryPrivateDnsNamespaceArgsIntterface;
  attrs: AwsServiceDiscoveryPrivateDnsNamespaceAttrsIntterface;

}
