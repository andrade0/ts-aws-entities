import { AwsRoute53RecordArgsIntterface } from '../interfaces';
import { AwsRoute53RecordArgsRecords } from '.';

export class AwsRoute53RecordArgs implements AwsRoute53RecordArgsIntterface {
  zone_id: string;
  name: string;
  type: string;
  ttl: string;
  records: AwsRoute53RecordArgsRecords;
  set_identifier?: string;
  health_check_id?: string;
  alias?: string;
  failover_routing_policy?: string;
  geolocation_routing_policy?: string;
  latency_routing_policy?: string;
  weighted_routing_policy?: string;
  multivalue_answer_routing_policy?: string;
  allow_overwrite?: string;
  continent: string;
  country: string;
  subdivision?: string;
  region: string;
  weight: string;

}
