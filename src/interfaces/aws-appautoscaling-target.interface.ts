import { AwsAppautoscalingTargetArgsIntterface, AwsAppautoscalingTargetAttrsIntterface } from '.';

export interface AwsAppautoscalingTargetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAppautoscalingTargetArgsIntterface;
	attrs: AwsAppautoscalingTargetAttrsIntterface;

}
