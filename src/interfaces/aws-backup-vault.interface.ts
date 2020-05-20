import { AwsBackupVaultArgsIntterface, AwsBackupVaultAttrsIntterface } from '.';

export interface AwsBackupVaultIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsBackupVaultArgsIntterface;
  attrs: AwsBackupVaultAttrsIntterface;

}
