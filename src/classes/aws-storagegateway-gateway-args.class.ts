import { AwsStoragegatewayGatewayArgsIntterface } from '../interfaces';
import { AwsStoragegatewayGatewayArgsId } from '.';

export class AwsStoragegatewayGatewayArgs implements AwsStoragegatewayGatewayArgsIntterface {
  	gateway_name: string;
	gateway_timezone: string;
	activation_key?: string;
	gateway_ip_address?: string;
	gateway_type?: string;
	media_changer_type?: string;
	smb_active_directory_settings?: string;
	smb_guest_password?: string;
	tape_drive_type?: string;
	domain_name: string;
	password: string;
	username: string;
	id: AwsStoragegatewayGatewayArgsId;
	arn: string;
	gateway_id: string;

}
