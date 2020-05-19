import { AwsGuarddutyMemberArgsIntterface, AwsGuarddutyMemberAttrsIntterface } from '.';

export interface AwsGuarddutyMemberIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsGuarddutyMemberArgsIntterface;
	attrs: AwsGuarddutyMemberAttrsIntterface;

}
