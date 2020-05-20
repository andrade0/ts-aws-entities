import { AwsServiceDiscoveryServiceIntterface } from '../interfaces';
import { AwsServiceDiscoveryServiceArgs, AwsServiceDiscoveryServiceAttrs } from '.';

export class AwsServiceDiscoveryService implements AwsServiceDiscoveryServiceIntterface {
  name: string = 'aws_service_discovery_service';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html';
  groupName: string = 'Service Discovery Resources';
  args: AwsServiceDiscoveryServiceArgs;
  attrs: AwsServiceDiscoveryServiceAttrs;

}
