import { AwsGlacierVaultArgsIntterface } from '../interfaces';
import { AwsGlacierVaultArgsNotification } from '.';

export class AwsGlacierVaultArgs implements AwsGlacierVaultArgsIntterface {
  name: string;
  access_policy?: string;
  notification?: AwsGlacierVaultArgsNotification;
  tags?: string;

}
