import { AwsGlacierVaultIntterface } from '../interfaces';
import { AwsGlacierVaultArgs, AwsGlacierVaultAttrs } from '.';

export class AwsGlacierVault implements AwsGlacierVaultIntterface {
  name: string = 'aws_glacier_vault';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/glacier_vault.html';
  groupName: string = 'Glacier Resources';
  args: AwsGlacierVaultArgs;
  attrs: AwsGlacierVaultAttrs;

}
