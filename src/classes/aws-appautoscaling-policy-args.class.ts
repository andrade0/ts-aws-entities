import { AwsAppautoscalingPolicyArgsIntterface } from '../interfaces';
import {
  AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration,
  AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration,
} from '.';

export class AwsAppautoscalingPolicyArgs implements AwsAppautoscalingPolicyArgsIntterface {
  name: string;
  policy_type?: string;
  resource_id: string;
  scalable_dimension: string;
  service_namespace: string;
  step_scaling_policy_configuration?: AwsAppautoscalingPolicyArgsStepScalingPolicyConfiguration;
  target_tracking_scaling_policy_configuration?: AwsAppautoscalingPolicyArgsTargetTrackingScalingPolicyConfiguration;
  dimensions?: string;
  metric_name: string;
  namespace: string;
  statistic: string;
  unit?: string;
  predefined_metric_type: string;
  resource_label?: string;
  adjustment_type: string;
  arn: string;

}
