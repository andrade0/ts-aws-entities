import { AwsCloudwatchEventPermissionArgsIntterface } from '../interfaces';
import { AwsCloudwatchEventPermissionArgsCondition } from '.';

export class AwsCloudwatchEventPermissionArgs implements AwsCloudwatchEventPermissionArgsIntterface {
  principal: string;
  statement_id: string;
  action?: string;
  condition?: AwsCloudwatchEventPermissionArgsCondition;

}
