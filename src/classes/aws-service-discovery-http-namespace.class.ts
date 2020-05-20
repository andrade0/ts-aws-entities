import { AwsServiceDiscoveryHttpNamespaceIntterface } from '../interfaces';
import { AwsServiceDiscoveryHttpNamespaceArgs, AwsServiceDiscoveryHttpNamespaceAttrs } from '.';

export class AwsServiceDiscoveryHttpNamespace implements AwsServiceDiscoveryHttpNamespaceIntterface {
  name: string = 'aws_service_discovery_http_namespace';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html';
  groupName: string = 'Service Discovery Resources';
  args: AwsServiceDiscoveryHttpNamespaceArgs;
  attrs: AwsServiceDiscoveryHttpNamespaceAttrs;

}
