import { AwsAmiCopyArgsIntterface, AwsAmiCopyAttrsIntterface } from '.';

export interface AwsAmiCopyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAmiCopyArgsIntterface;
  attrs: AwsAmiCopyAttrsIntterface;

}
