import { AwsGlacierVaultArgsIntterface, AwsGlacierVaultAttrsIntterface } from '.';

export interface AwsGlacierVaultIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsGlacierVaultArgsIntterface;
	attrs: AwsGlacierVaultAttrsIntterface;

}
