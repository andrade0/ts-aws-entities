import { AwsIamRoleArgsAssumeRolePolicyIntterface } from '../interfaces';


export class AwsIamRoleArgsAssumeRolePolicy implements AwsIamRoleArgsAssumeRolePolicyIntterface {
  force_detach_policies?: string;
  path?: string;
  description?: string;
  max_session_duration?: string;
  permissions_boundary?: string;
  tags: string;

}
