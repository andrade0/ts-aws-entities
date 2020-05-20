import { AwsAutoscalingPolicyArgsStepAdjustmentsIntterface } from '../interfaces';


export class AwsAutoscalingPolicyArgsStepAdjustments implements AwsAutoscalingPolicyArgsStepAdjustmentsIntterface {
  scaling_adjustment: string;
  metric_interval_lower_bound?: string;
  metric_interval_upper_bound?: string;

}
