import { AwsConfigConfigurationRecorderIntterface } from '../interfaces';
import { AwsConfigConfigurationRecorderArgs,  AwsConfigConfigurationRecorderAttrs } from '.';

export class AwsConfigConfigurationRecorder implements AwsConfigConfigurationRecorderIntterface {
  	name: string = 'aws_config_configuration_recorder';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html';
	groupName: string = 'Config Resources';
	args: AwsConfigConfigurationRecorderArgs;
	attrs: AwsConfigConfigurationRecorderAttrs;

}
