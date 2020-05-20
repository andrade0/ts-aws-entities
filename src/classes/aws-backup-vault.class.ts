import { AwsBackupVaultIntterface } from '../interfaces';
import { AwsBackupVaultArgs, AwsBackupVaultAttrs } from '.';

export class AwsBackupVault implements AwsBackupVaultIntterface {
  name: string = 'aws_backup_vault';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/backup_vault.html';
  groupName: string = 'Backup Resources';
  args: AwsBackupVaultArgs;
  attrs: AwsBackupVaultAttrs;

}
