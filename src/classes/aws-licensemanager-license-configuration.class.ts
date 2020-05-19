import { AwsLicensemanagerLicenseConfigurationIntterface } from '../interfaces';
import { AwsLicensemanagerLicenseConfigurationArgs,  AwsLicensemanagerLicenseConfigurationAttrs } from '.';

export class AwsLicensemanagerLicenseConfiguration implements AwsLicensemanagerLicenseConfigurationIntterface {
  	name: string = 'aws_licensemanager_license_configuration';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html';
	groupName: string = 'License Manager Resources';
	args: AwsLicensemanagerLicenseConfigurationArgs;
	attrs: AwsLicensemanagerLicenseConfigurationAttrs;

}
