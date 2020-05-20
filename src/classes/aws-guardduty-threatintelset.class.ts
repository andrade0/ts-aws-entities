import { AwsGuarddutyThreatintelsetIntterface } from '../interfaces';
import { AwsGuarddutyThreatintelsetArgs, AwsGuarddutyThreatintelsetAttrs } from '.';

export class AwsGuarddutyThreatintelset implements AwsGuarddutyThreatintelsetIntterface {
  name: string = 'aws_guardduty_threatintelset';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/guardduty_threatintelset.html';
  groupName: string = 'GuardDuty Resources';
  args: AwsGuarddutyThreatintelsetArgs;
  attrs: AwsGuarddutyThreatintelsetAttrs;

}
