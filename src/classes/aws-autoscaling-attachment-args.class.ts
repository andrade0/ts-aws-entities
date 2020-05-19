import { AwsAutoscalingAttachmentArgsIntterface } from '../interfaces';


export class AwsAutoscalingAttachmentArgs implements AwsAutoscalingAttachmentArgsIntterface {
  	autoscaling_group_name: string;
	elb?: string;
	alb_target_group_arn?: string;

}
