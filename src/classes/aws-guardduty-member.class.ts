import { AwsGuarddutyMemberIntterface } from '../interfaces';
import { AwsGuarddutyMemberArgs,  AwsGuarddutyMemberAttrs } from '.';

export class AwsGuarddutyMember implements AwsGuarddutyMemberIntterface {
  	name: string = 'aws_guardduty_member';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/guardduty_member.html';
	groupName: string = 'GuardDuty Resources';
	args: AwsGuarddutyMemberArgs;
	attrs: AwsGuarddutyMemberAttrs;

}
