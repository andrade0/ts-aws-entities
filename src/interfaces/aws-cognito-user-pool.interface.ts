import { AwsCognitoUserPoolArgsIntterface, AwsCognitoUserPoolAttrsIntterface } from '.';

export interface AwsCognitoUserPoolIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCognitoUserPoolArgsIntterface;
  attrs: AwsCognitoUserPoolAttrsIntterface;

}
