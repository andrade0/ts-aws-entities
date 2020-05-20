export interface AwsAutoscalingLifecycleHookArgsIntterface {
  name: string;
  autoscaling_group_name: string;
  default_result?: string;
  heartbeat_timeout?: string;
  lifecycle_transition: string;
  notification_metadata?: string;
  notification_target_arn?: string;
  role_arn?: string;

}
