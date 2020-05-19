import { AwsGlacierVaultLockIntterface } from '../interfaces';
import { AwsGlacierVaultLockArgs,  AwsGlacierVaultLockAttrs } from '.';

export class AwsGlacierVaultLock implements AwsGlacierVaultLockIntterface {
  	name: string = 'aws_glacier_vault_lock';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html';
	groupName: string = 'Glacier Resources';
	args: AwsGlacierVaultLockArgs;
	attrs: AwsGlacierVaultLockAttrs;

}
