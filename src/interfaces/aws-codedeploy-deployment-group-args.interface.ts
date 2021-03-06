import {
  AwsCodedeployDeploymentGroupArgsAlarmConfigurationIntterface,
  AwsCodedeployDeploymentGroupArgsAutoRollbackConfigurationIntterface,
  AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigIntterface,
  AwsCodedeployDeploymentGroupArgsDeploymentStyleIntterface,
  AwsCodedeployDeploymentGroupArgsEc2TagFilterIntterface,
  AwsCodedeployDeploymentGroupArgsLoadBalancerInfoIntterface,
  AwsCodedeployDeploymentGroupArgsProdTrafficRouteIntterface,
  AwsCodedeployDeploymentGroupArgsTargetGroupIntterface,
  AwsCodedeployDeploymentGroupArgsTestTrafficRouteIntterface,
  AwsCodedeployDeploymentGroupArgsTriggerConfigurationIntterface,
} from '.';

export interface AwsCodedeployDeploymentGroupArgsIntterface {
  app_name: string;
  deployment_group_name: string;
  service_role_arn: string;
  alarm_configuration?: AwsCodedeployDeploymentGroupArgsAlarmConfigurationIntterface;
  auto_rollback_configuration?: AwsCodedeployDeploymentGroupArgsAutoRollbackConfigurationIntterface;
  autoscaling_groups?: string;
  blue_green_deployment_config?: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigIntterface;
  deployment_config_name?: string;
  deployment_style?: AwsCodedeployDeploymentGroupArgsDeploymentStyleIntterface;
  ec2_tag_filter?: AwsCodedeployDeploymentGroupArgsEc2TagFilterIntterface;
  ec2_tag_set?: string;
  ecs_service?: string;
  load_balancer_info?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoIntterface;
  on_premises_instance_tag_filter?: string;
  trigger_configuration?: AwsCodedeployDeploymentGroupArgsTriggerConfigurationIntterface;
  action_on_timeout?: string;
  wait_time_in_minutes?: string;
  action?: string;
  termination_wait_time_in_minutes?: string;
  name?: string;
  prod_traffic_route: AwsCodedeployDeploymentGroupArgsProdTrafficRouteIntterface;
  target_group: AwsCodedeployDeploymentGroupArgsTargetGroupIntterface;
  test_traffic_route?: AwsCodedeployDeploymentGroupArgsTestTrafficRouteIntterface;
  key?: string;
  type?: string;
  value?: string;

}
