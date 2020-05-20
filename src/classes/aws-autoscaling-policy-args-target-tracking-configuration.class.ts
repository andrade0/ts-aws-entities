import { AwsAutoscalingPolicyArgsTargetTrackingConfigurationIntterface } from '../interfaces';


export class AwsAutoscalingPolicyArgsTargetTrackingConfiguration implements AwsAutoscalingPolicyArgsTargetTrackingConfigurationIntterface {
  predefined_metric_specification?: string;
  customized_metric_specification?: string;
  target_value: string;
  disable_scale_in: string;

}
