import { AwsWorklinkFleetArgsIdentityProviderIntterface, AwsWorklinkFleetArgsNetworkIntterface } from '.';

export interface AwsWorklinkFleetArgsIntterface {
  	name: string;
	audit_stream_arn?: string;
	device_ca_certificate?: string;
	identity_provider?: AwsWorklinkFleetArgsIdentityProviderIntterface;
	display_name?: string;
	network?: AwsWorklinkFleetArgsNetworkIntterface;
	optimize_for_end_user_location?: string;

}
