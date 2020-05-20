import { AwsServiceDiscoveryPrivateDnsNamespaceIntterface } from '../interfaces';
import { AwsServiceDiscoveryPrivateDnsNamespaceArgs, AwsServiceDiscoveryPrivateDnsNamespaceAttrs } from '.';

export class AwsServiceDiscoveryPrivateDnsNamespace implements AwsServiceDiscoveryPrivateDnsNamespaceIntterface {
  name: string = 'aws_service_discovery_private_dns_namespace';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html';
  groupName: string = 'Service Discovery Resources';
  args: AwsServiceDiscoveryPrivateDnsNamespaceArgs;
  attrs: AwsServiceDiscoveryPrivateDnsNamespaceAttrs;

}
