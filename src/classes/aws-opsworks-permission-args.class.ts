import { AwsOpsworksPermissionArgsIntterface } from '../interfaces';


export class AwsOpsworksPermissionArgs implements AwsOpsworksPermissionArgsIntterface {
  allow_ssh?: string;
  allow_sudo?: string;
  user_arn: string;
  level?: string;
  stack_id: string;

}
