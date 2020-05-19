import { AwsAutoscalingScheduleArgsIntterface } from '../interfaces';


export class AwsAutoscalingScheduleArgs implements AwsAutoscalingScheduleArgsIntterface {
  	autoscaling_group_name: string;
	scheduled_action_name: string;
	start_time?: string;
	end_time?: string;
	recurrence?: string;
	min_size?: string;
	max_size?: string;
	desired_capacity?: string;
	arn: string;

}
