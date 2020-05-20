import { AwsCloudwatchEventPermissionIntterface } from '../interfaces';
import { AwsCloudwatchEventPermissionArgs, AwsCloudwatchEventPermissionAttrs } from '.';

export class AwsCloudwatchEventPermission implements AwsCloudwatchEventPermissionIntterface {
  name: string = 'aws_cloudwatch_event_permission';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html';
  groupName: string = 'CloudWatch Resources';
  args: AwsCloudwatchEventPermissionArgs;
  attrs: AwsCloudwatchEventPermissionAttrs;

}
