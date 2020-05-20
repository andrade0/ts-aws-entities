import { AwsEfsFileSystemArgsIntterface, AwsEfsFileSystemAttrsIntterface } from '.';

export interface AwsEfsFileSystemIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEfsFileSystemArgsIntterface;
  attrs: AwsEfsFileSystemAttrsIntterface;

}
