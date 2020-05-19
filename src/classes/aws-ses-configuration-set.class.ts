import { AwsSesConfigurationSetIntterface } from '../interfaces';
import { AwsSesConfigurationSetArgs,  AwsSesConfigurationSetAttrs } from '.';

export class AwsSesConfigurationSet implements AwsSesConfigurationSetIntterface {
  	name: string = 'aws_ses_configuration_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html';
	groupName: string = 'SES Resources';
	args: AwsSesConfigurationSetArgs;
	attrs: AwsSesConfigurationSetAttrs;

}
