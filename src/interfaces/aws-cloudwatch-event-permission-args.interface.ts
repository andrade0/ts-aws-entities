import { AwsCloudwatchEventPermissionArgsConditionIntterface } from '.';

export interface AwsCloudwatchEventPermissionArgsIntterface {
  	principal: string;
	statement_id: string;
	action?: string;
	condition?: AwsCloudwatchEventPermissionArgsConditionIntterface;

}
