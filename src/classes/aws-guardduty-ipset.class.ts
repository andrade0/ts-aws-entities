import { AwsGuarddutyIpsetIntterface } from '../interfaces';
import { AwsGuarddutyIpsetArgs,  AwsGuarddutyIpsetAttrs } from '.';

export class AwsGuarddutyIpset implements AwsGuarddutyIpsetIntterface {
  	name: string = 'aws_guardduty_ipset';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html';
	groupName: string = 'GuardDuty Resources';
	args: AwsGuarddutyIpsetArgs;
	attrs: AwsGuarddutyIpsetAttrs;

}
