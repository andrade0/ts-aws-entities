import { AwsGlueSecurityConfigurationIntterface } from '../interfaces';
import { AwsGlueSecurityConfigurationArgs,  AwsGlueSecurityConfigurationAttrs } from '.';

export class AwsGlueSecurityConfiguration implements AwsGlueSecurityConfigurationIntterface {
  	name: string = 'aws_glue_security_configuration';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html';
	groupName: string = 'Glue Resources';
	args: AwsGlueSecurityConfigurationArgs;
	attrs: AwsGlueSecurityConfigurationAttrs;

}
