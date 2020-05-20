import { AwsAutoscalingPolicyArgsIntterface } from '../interfaces';
import { AwsAutoscalingPolicyArgsStepAdjustments, AwsAutoscalingPolicyArgsTargetTrackingConfiguration } from '.';

export class AwsAutoscalingPolicyArgs implements AwsAutoscalingPolicyArgsIntterface {
  name: string;
  autoscaling_group_name: string;
  adjustment_type?: string;
  policy_type?: string;
  estimated_instance_warmup?: string;
  cooldown?: string;
  scaling_adjustment?: string;
  metric_aggregation_type?: string;
  step_adjustments?: AwsAutoscalingPolicyArgsStepAdjustments;
  target_tracking_configuration?: AwsAutoscalingPolicyArgsTargetTrackingConfiguration;
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
