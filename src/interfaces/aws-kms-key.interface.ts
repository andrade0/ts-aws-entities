import { AwsKmsKeyArgsIntterface, AwsKmsKeyAttrsIntterface } from '.';

export interface AwsKmsKeyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsKmsKeyArgsIntterface;
  attrs: AwsKmsKeyAttrsIntterface;

}
