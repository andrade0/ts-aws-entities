import { AwsAutoscalingNotificationIntterface } from '../interfaces';
import { AwsAutoscalingNotificationArgs, AwsAutoscalingNotificationAttrs } from '.';

export class AwsAutoscalingNotification implements AwsAutoscalingNotificationIntterface {
  name: string = 'aws_autoscaling_notification';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html';
  groupName: string = 'EC2 Resources';
  args: AwsAutoscalingNotificationArgs;
  attrs: AwsAutoscalingNotificationAttrs;

}
