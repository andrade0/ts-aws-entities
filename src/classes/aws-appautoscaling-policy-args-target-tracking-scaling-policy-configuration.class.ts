import { AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationIntterface } from '../interfaces';


export class AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration implements AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfigurationIntterface {
  	target_value: string;
	disable_scale_in?: string;
	scale_in_cooldown?: string;
	scale_out_cooldown?: string;
	customized_metric_specification?: string;
	predefined_metric_specification?: string;

}
