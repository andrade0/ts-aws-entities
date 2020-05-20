export interface AwsAutoscalingGroupAttrsIntterface {
  id?: string;
  arn?: string;
  availability_zones?: string;
  min_size?: string;
  max_size?: string;
  default_cooldown?: string;
  name?: string;
  health_check_grace_period?: string;
  health_check_type?: string;
  desired_capacity?: string;
  launch_configuration?: string;
  vpc_zone_identifier?: string;
  load_balancers?: string;
  target_group_arns?: string;

}
