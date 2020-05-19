import { AwsAppautoscalingTargetArgsIntterface } from '../interfaces';


export class AwsAppautoscalingTargetArgs implements AwsAppautoscalingTargetArgsIntterface {
  	max_capacity: string;
	min_capacity: string;
	resource_id: string;
	role_arn?: string;
	scalable_dimension: string;
	service_namespace: string;

}
