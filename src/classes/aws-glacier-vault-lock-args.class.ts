import { AwsGlacierVaultLockArgsIntterface } from '../interfaces';


export class AwsGlacierVaultLockArgs implements AwsGlacierVaultLockArgsIntterface {
  complete_lock: boolean;
  policy: string;
  vault_name: string;
  ignore_deletion_error?: string;

}
