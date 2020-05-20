import { AwsIamAccountAliasArgsIntterface, AwsIamAccountAliasAttrsIntterface } from '.';

export interface AwsIamAccountAliasIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamAccountAliasArgsIntterface;
  attrs: AwsIamAccountAliasAttrsIntterface;

}
