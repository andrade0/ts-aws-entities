import { AwsGameliftFleetArgsIntterface } from '../interfaces';
import {
  AwsGameliftFleetArgsEc2InboundPermission,
  AwsGameliftFleetArgsResourceCreationLimitPolicy,
  AwsGameliftFleetArgsRuntimeConfiguration,
} from '.';

export class AwsGameliftFleetArgs implements AwsGameliftFleetArgsIntterface {
  build_id: string;
  ec2_instance_type: string;
  name: string;
  description?: string;
  ec2_inbound_permission?: AwsGameliftFleetArgsEc2InboundPermission;
  metric_groups?: string;
  new_game_session_protection_policy?: string;
  resource_creation_limit_policy?: AwsGameliftFleetArgsResourceCreationLimitPolicy;
  runtime_configuration?: AwsGameliftFleetArgsRuntimeConfiguration;
  concurrent_executions: number;
  launch_path: string;
  parameters?: string;

}
