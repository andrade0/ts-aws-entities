import { AwsIamUserSshKeyArgsIntterface, AwsIamUserSshKeyAttrsIntterface } from '.';

export interface AwsIamUserSshKeyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamUserSshKeyArgsIntterface;
  attrs: AwsIamUserSshKeyAttrsIntterface;

}
