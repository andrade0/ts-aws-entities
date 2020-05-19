import { AwsTransferServerArgsIntterface } from '../interfaces';


export class AwsTransferServerArgs implements AwsTransferServerArgsIntterface {
  	invocation_role?: string;
	url?: string;
	identity_provider_type?: string;
	logging_role?: string;
	force_destroy?: string;
	tags?: string;

}
