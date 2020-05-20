import { AwsSnsSmsPreferencesIntterface } from '../interfaces';
import { AwsSnsSmsPreferencesArgs, AwsSnsSmsPreferencesAttrs } from '.';

export class AwsSnsSmsPreferences implements AwsSnsSmsPreferencesIntterface {
  name: string = 'aws_sns_sms_preferences';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html';
  groupName: string = 'SNS Resources';
  args: AwsSnsSmsPreferencesArgs;
  attrs: AwsSnsSmsPreferencesAttrs;

}
