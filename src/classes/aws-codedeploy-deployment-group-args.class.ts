import { AwsCodedeployDeploymentGroupArgsIntterface } from '../interfaces';
import { AwsCodedeployDeploymentGroupArgsAlarmConfiguration,  AwsCodedeployDeploymentGroupArgsAutoRollbackConfiguration,  AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig,  AwsCodedeployDeploymentGroupArgsDeploymentStyle,  AwsCodedeployDeploymentGroupArgsEc2TagFilter,  AwsCodedeployDeploymentGroupArgsLoadBalancerInfo,  AwsCodedeployDeploymentGroupArgsTriggerConfiguration,  AwsCodedeployDeploymentGroupArgsProdTrafficRoute,  AwsCodedeployDeploymentGroupArgsTargetGroup,  AwsCodedeployDeploymentGroupArgsTestTrafficRoute } from '.';

export class AwsCodedeployDeploymentGroupArgs implements AwsCodedeployDeploymentGroupArgsIntterface {
  	app_name: string;
	deployment_group_name: string;
	service_role_arn: string;
	alarm_configuration?: AwsCodedeployDeploymentGroupArgsAlarmConfiguration;
	auto_rollback_configuration?: AwsCodedeployDeploymentGroupArgsAutoRollbackConfiguration;
	autoscaling_groups?: string;
	blue_green_deployment_config?: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig;
	deployment_config_name?: string;
	deployment_style?: AwsCodedeployDeploymentGroupArgsDeploymentStyle;
	ec2_tag_filter?: AwsCodedeployDeploymentGroupArgsEc2TagFilter;
	ec2_tag_set?: string;
	ecs_service?: string;
	load_balancer_info?: AwsCodedeployDeploymentGroupArgsLoadBalancerInfo;
	on_premises_instance_tag_filter?: string;
	trigger_configuration?: AwsCodedeployDeploymentGroupArgsTriggerConfiguration;
	action_on_timeout?: string;
	wait_time_in_minutes?: string;
	action?: string;
	termination_wait_time_in_minutes?: string;
	name?: string;
	prod_traffic_route: AwsCodedeployDeploymentGroupArgsProdTrafficRoute;
	target_group: AwsCodedeployDeploymentGroupArgsTargetGroup;
	test_traffic_route?: AwsCodedeployDeploymentGroupArgsTestTrafficRoute;
	key?: string;
	type?: string;
	value?: string;

}
