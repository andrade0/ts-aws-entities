import { AwsServiceDiscoveryPublicDnsNamespaceIntterface } from '../interfaces';
import { AwsServiceDiscoveryPublicDnsNamespaceArgs, AwsServiceDiscoveryPublicDnsNamespaceAttrs } from '.';

export class AwsServiceDiscoveryPublicDnsNamespace implements AwsServiceDiscoveryPublicDnsNamespaceIntterface {
  name: string = 'aws_service_discovery_public_dns_namespace';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html';
  groupName: string = 'Service Discovery Resources';
  args: AwsServiceDiscoveryPublicDnsNamespaceArgs;
  attrs: AwsServiceDiscoveryPublicDnsNamespaceAttrs;

}
