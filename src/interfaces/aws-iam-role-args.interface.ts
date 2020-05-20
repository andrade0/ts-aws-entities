import { AwsIamRoleArgsAssumeRolePolicyIntterface } from '.';

export interface AwsIamRoleArgsIntterface {
  name: string;
  name_prefix: string;
  assume_role_policy: AwsIamRoleArgsAssumeRolePolicyIntterface;

}
