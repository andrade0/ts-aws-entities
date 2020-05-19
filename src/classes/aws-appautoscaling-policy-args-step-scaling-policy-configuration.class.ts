import { AwsAppautoscalingPolicyArgsStepScalingPolicyConfigurationIntterface } from '../interfaces';


export class AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration implements AwsAppautoscalingPolicyArgsStepScalingPolicyConfigurationIntterface {
  	adjustment_type: string;
	cooldown: string;
	metric_aggregation_type?: string;
	min_adjustment_magnitude?: string;
	metric_interval_lower_bound?: string;
	metric_interval_upper_bound?: string;
	scaling_adjustment: string;
	step_adjustment?: string;

}
