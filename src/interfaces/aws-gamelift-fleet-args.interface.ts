import { AwsGameliftFleetArgsEc2InboundPermissionIntterface, AwsGameliftFleetArgsResourceCreationLimitPolicyIntterface, AwsGameliftFleetArgsRuntimeConfigurationIntterface } from '.';

export interface AwsGameliftFleetArgsIntterface {
  	build_id: string;
	ec2_instance_type: string;
	name: string;
	description?: string;
	ec2_inbound_permission?: AwsGameliftFleetArgsEc2InboundPermissionIntterface;
	metric_groups?: string;
	new_game_session_protection_policy?: string;
	resource_creation_limit_policy?: AwsGameliftFleetArgsResourceCreationLimitPolicyIntterface;
	runtime_configuration?: AwsGameliftFleetArgsRuntimeConfigurationIntterface;
	concurrent_executions: number;
	launch_path: string;
	parameters?: string;

}
