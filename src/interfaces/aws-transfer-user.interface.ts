import { AwsTransferUserArgsIntterface, AwsTransferUserAttrsIntterface } from '.';

export interface AwsTransferUserIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsTransferUserArgsIntterface;
  attrs: AwsTransferUserAttrsIntterface;

}
