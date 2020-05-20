import { AwsSesIdentityNotificationTopicIntterface } from '../interfaces';
import { AwsSesIdentityNotificationTopicArgs, AwsSesIdentityNotificationTopicAttrs } from '.';

export class AwsSesIdentityNotificationTopic implements AwsSesIdentityNotificationTopicIntterface {
  name: string = 'aws_ses_identity_notification_topic';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html';
  groupName: string = 'SES Resources';
  args: AwsSesIdentityNotificationTopicArgs;
  attrs: AwsSesIdentityNotificationTopicAttrs;

}
