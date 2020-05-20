import { AwsIamUserLoginProfileArgsIntterface, AwsIamUserLoginProfileAttrsIntterface } from '.';

export interface AwsIamUserLoginProfileIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamUserLoginProfileArgsIntterface;
  attrs: AwsIamUserLoginProfileAttrsIntterface;

}
