import { AwsEcrRepositoryPolicyArgsIntterface, AwsEcrRepositoryPolicyAttrsIntterface } from '.';

export interface AwsEcrRepositoryPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEcrRepositoryPolicyArgsIntterface;
  attrs: AwsEcrRepositoryPolicyAttrsIntterface;

}
