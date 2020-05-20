import {
  AwsServiceDiscoveryPublicDnsNamespaceArgsIntterface,
  AwsServiceDiscoveryPublicDnsNamespaceAttrsIntterface,
} from '.';

export interface AwsServiceDiscoveryPublicDnsNamespaceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsServiceDiscoveryPublicDnsNamespaceArgsIntterface;
  attrs: AwsServiceDiscoveryPublicDnsNamespaceAttrsIntterface;

}
