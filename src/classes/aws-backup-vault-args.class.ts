import { AwsBackupVaultArgsIntterface } from '../interfaces';


export class AwsBackupVaultArgs implements AwsBackupVaultArgsIntterface {
  name: string;
  tags?: string;
  kms_key_arn?: string;

}
