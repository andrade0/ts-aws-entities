import { AwsServiceDiscoveryServiceArgsIntterface } from '../interfaces';


export class AwsServiceDiscoveryServiceArgs implements AwsServiceDiscoveryServiceArgsIntterface {
  name: string;
  description?: string;
  dns_config: string;
  health_check_config?: string;
  health_check_custom_config: string;
  namespace_id: string;
  dns_records: string;
  routing_policy?: string;
  ttl: string;
  type: string;
  failure_threshold?: string;
  resource_path?: string;

}
