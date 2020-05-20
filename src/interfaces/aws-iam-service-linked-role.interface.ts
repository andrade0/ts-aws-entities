import { AwsIamServiceLinkedRoleArgsIntterface, AwsIamServiceLinkedRoleAttrsIntterface } from '.';

export interface AwsIamServiceLinkedRoleIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamServiceLinkedRoleArgsIntterface;
  attrs: AwsIamServiceLinkedRoleAttrsIntterface;

}
