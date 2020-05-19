import { AwsWorklinkFleetArgsIntterface } from '../interfaces';
import { AwsWorklinkFleetArgsIdentityProvider,  AwsWorklinkFleetArgsNetwork } from '.';

export class AwsWorklinkFleetArgs implements AwsWorklinkFleetArgsIntterface {
  	name: string;
	audit_stream_arn?: string;
	device_ca_certificate?: string;
	identity_provider?: AwsWorklinkFleetArgsIdentityProvider;
	display_name?: string;
	network?: AwsWorklinkFleetArgsNetwork;
	optimize_for_end_user_location?: string;

}
