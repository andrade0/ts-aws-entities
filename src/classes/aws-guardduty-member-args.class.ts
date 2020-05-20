import { AwsGuarddutyMemberArgsIntterface } from '../interfaces';


export class AwsGuarddutyMemberArgs implements AwsGuarddutyMemberArgsIntterface {
  account_id: string;
  detector_id: string;
  email: string;
  invite?: boolean;
  invitation_message?: string;
  disable_email_notification?: boolean;
  create: string;
  update: string;

}
