import { AwsAutoscalingNotificationArgsIntterface } from '../interfaces';


export class AwsAutoscalingNotificationArgs implements AwsAutoscalingNotificationArgsIntterface {
  group_names: string;
  notifications: string;
  topic_arn: string;

}
