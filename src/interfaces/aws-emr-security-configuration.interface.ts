import { AwsEmrSecurityConfigurationArgsIntterface, AwsEmrSecurityConfigurationAttrsIntterface } from '.';

export interface AwsEmrSecurityConfigurationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEmrSecurityConfigurationArgsIntterface;
	attrs: AwsEmrSecurityConfigurationAttrsIntterface;

}
