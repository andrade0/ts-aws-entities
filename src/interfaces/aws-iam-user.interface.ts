import { AwsIamUserArgsIntterface, AwsIamUserAttrsIntterface } from '.';

export interface AwsIamUserIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamUserArgsIntterface;
  attrs: AwsIamUserAttrsIntterface;

}
