import { AwsLbTargetGroupArgsIntterface, AwsLbTargetGroupAttrsIntterface } from '.';

export interface AwsLbTargetGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsLbTargetGroupArgsIntterface;
	attrs: AwsLbTargetGroupAttrsIntterface;

}
