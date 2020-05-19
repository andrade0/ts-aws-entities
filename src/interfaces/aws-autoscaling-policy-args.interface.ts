import { AwsAutoscalingPolicyArgsStepAdjustmentsIntterface, AwsAutoscalingPolicyArgsTargetTrackingConfigurationIntterface } from '.';

export interface AwsAutoscalingPolicyArgsIntterface {
  	name: string;
	autoscaling_group_name: string;
	adjustment_type?: string;
	policy_type?: string;
	estimated_instance_warmup?: string;
	cooldown?: string;
	scaling_adjustment?: string;
	metric_aggregation_type?: string;
	step_adjustments?: AwsAutoscalingPolicyArgsStepAdjustmentsIntterface;
	target_tracking_configuration?: AwsAutoscalingPolicyArgsTargetTrackingConfigurationIntterface;
	predefined_metric_type: string;
	resource_label?: string;
	metric_dimension?: string;
	metric_name: string;
	namespace: string;
	statistic: string;
	unit?: string;
	value: string;
	min_adjustment_step?: string;
	arn: string;

}
