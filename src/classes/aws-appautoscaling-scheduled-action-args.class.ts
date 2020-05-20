import { AwsAppautoscalingScheduledActionArgsIntterface } from '../interfaces';
import { AwsAppautoscalingScheduledActionArgsScalableTargetAction } from '.';

export class AwsAppautoscalingScheduledActionArgs implements AwsAppautoscalingScheduledActionArgsIntterface {
  name: string;
  service_namespace: string;
  resource_id: string;
  scalable_dimension?: string;
  scalable_target_action?: AwsAppautoscalingScheduledActionArgsScalableTargetAction;
  schedule?: string;
  start_time?: string;
  end_time?: string;

}
