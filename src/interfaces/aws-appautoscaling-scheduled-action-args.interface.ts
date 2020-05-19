import { AwsAppautoscalingScheduledActionArgsScalableTargetActionIntterface } from '.';

export interface AwsAppautoscalingScheduledActionArgsIntterface {
  	name: string;
	service_namespace: string;
	resource_id: string;
	scalable_dimension?: string;
	scalable_target_action?: AwsAppautoscalingScheduledActionArgsScalableTargetActionIntterface;
	schedule?: string;
	start_time?: string;
	end_time?: string;

}
