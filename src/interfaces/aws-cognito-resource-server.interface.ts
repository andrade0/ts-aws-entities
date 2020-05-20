import { AwsCognitoResourceServerArgsIntterface, AwsCognitoResourceServerAttrsIntterface } from '.';

export interface AwsCognitoResourceServerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCognitoResourceServerArgsIntterface;
  attrs: AwsCognitoResourceServerAttrsIntterface;

}
