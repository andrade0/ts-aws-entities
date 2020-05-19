import { AwsGlacierVaultArgsNotificationIntterface } from '.';

export interface AwsGlacierVaultArgsIntterface {
  	name: string;
	access_policy?: string;
	notification?: AwsGlacierVaultArgsNotificationIntterface;
	tags?: string;

}
