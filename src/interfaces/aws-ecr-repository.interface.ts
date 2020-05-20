import { AwsEcrRepositoryArgsIntterface, AwsEcrRepositoryAttrsIntterface } from '.';

export interface AwsEcrRepositoryIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEcrRepositoryArgsIntterface;
  attrs: AwsEcrRepositoryAttrsIntterface;

}
