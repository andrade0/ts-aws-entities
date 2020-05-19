import { AwsGuarddutyDetectorIntterface } from '../interfaces';
import { AwsGuarddutyDetectorArgs,  AwsGuarddutyDetectorAttrs } from '.';

export class AwsGuarddutyDetector implements AwsGuarddutyDetectorIntterface {
  	name: string = 'aws_guardduty_detector';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html';
	groupName: string = 'GuardDuty Resources';
	args: AwsGuarddutyDetectorArgs;
	attrs: AwsGuarddutyDetectorAttrs;

}
