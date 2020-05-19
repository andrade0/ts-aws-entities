import { AwsEmrSecurityConfigurationIntterface } from '../interfaces';
import { AwsEmrSecurityConfigurationArgs,  AwsEmrSecurityConfigurationAttrs } from '.';

export class AwsEmrSecurityConfiguration implements AwsEmrSecurityConfigurationIntterface {
  	name: string = 'aws_emr_security_configuration';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/emr_security_configuration.html';
	groupName: string = 'Elastic Map Reduce Resources';
	args: AwsEmrSecurityConfigurationArgs;
	attrs: AwsEmrSecurityConfigurationAttrs;

}
