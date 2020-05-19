import { AwsOpsworksStackArgsIntterface } from '../interfaces';
import { AwsOpsworksStackArgsCustomCookbooksSource } from '.';

export class AwsOpsworksStackArgs implements AwsOpsworksStackArgsIntterface {
  	name: string;
	region: string;
	service_role_arn: string;
	default_instance_profile_arn: string;
	agent_version?: string;
	berkshelf_version?: string;
	color?: string;
	default_availability_zone?: string;
	configuration_manager_name?: string;
	configuration_manager_version?: string;
	custom_cookbooks_source?: AwsOpsworksStackArgsCustomCookbooksSource;
	custom_json?: string;
	default_os?: string;
	default_root_device_type?: string;
	default_ssh_key_name?: string;
	default_subnet_id?: string;
	hostname_theme?: string;
	manage_berkshelf?: boolean;
	tags?: string;
	use_custom_cookbooks?: boolean;
	use_opsworks_security_groups?: boolean;
	vpc_id?: string;

}
