import { AwsIamAccessKeyArgsIntterface, AwsIamAccessKeyAttrsIntterface } from '.';

export interface AwsIamAccessKeyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamAccessKeyArgsIntterface;
  attrs: AwsIamAccessKeyAttrsIntterface;

}
