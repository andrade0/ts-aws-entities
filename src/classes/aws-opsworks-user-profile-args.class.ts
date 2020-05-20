import { AwsOpsworksUserProfileArgsIntterface } from '../interfaces';


export class AwsOpsworksUserProfileArgs implements AwsOpsworksUserProfileArgsIntterface {
  user_arn: string;
  allow_self_management?: string;
  ssh_username: string;
  ssh_public_key?: string;

}
