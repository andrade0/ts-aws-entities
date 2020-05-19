import { AwsConfigConfigurationRecorderArgsIntterface } from '../interfaces';
import { AwsConfigConfigurationRecorderArgsRecordingGroup } from '.';

export class AwsConfigConfigurationRecorderArgs implements AwsConfigConfigurationRecorderArgsIntterface {
  	name?: string;
	role_arn: string;
	recording_group?: AwsConfigConfigurationRecorderArgsRecordingGroup;

}
