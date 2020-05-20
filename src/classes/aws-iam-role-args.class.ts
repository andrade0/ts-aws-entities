import { AwsIamRoleArgsIntterface } from '../interfaces';
import { AwsIamRoleArgsAssumeRolePolicy } from '.';

export class AwsIamRoleArgs implements AwsIamRoleArgsIntterface {
  name: string;
  name_prefix: string;
  assume_role_policy: AwsIamRoleArgsAssumeRolePolicy;

}
