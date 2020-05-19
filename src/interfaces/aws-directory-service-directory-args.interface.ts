import { AwsDirectoryServiceDirectoryArgsVpcSettingsIntterface, AwsDirectoryServiceDirectoryArgsConnectSettingsIntterface } from '.';

export interface AwsDirectoryServiceDirectoryArgsIntterface {
  	name: string;
	password: string;
	size: string;
	vpc_settings: AwsDirectoryServiceDirectoryArgsVpcSettingsIntterface;
	connect_settings: AwsDirectoryServiceDirectoryArgsConnectSettingsIntterface;
	alias?: string;
	description?: string;
	short_name?: string;
	enable_sso?: string;
	type?: string;
	edition?: string;
	tags?: string;

}
