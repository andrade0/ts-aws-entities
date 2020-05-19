import { AwsConfigConfigurationRecorderStatusIntterface } from '../interfaces';
import { AwsConfigConfigurationRecorderStatusArgs,  AwsConfigConfigurationRecorderStatusAttrs } from '.';

export class AwsConfigConfigurationRecorderStatus implements AwsConfigConfigurationRecorderStatusIntterface {
  	name: string = 'aws_config_configuration_recorder_status';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html';
	groupName: string = 'Config Resources';
	args: AwsConfigConfigurationRecorderStatusArgs;
	attrs: AwsConfigConfigurationRecorderStatusAttrs;

}
