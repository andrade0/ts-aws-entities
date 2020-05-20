import {
  AwsCognitoIdentityPoolRolesAttachmentArgsIntterface,
  AwsCognitoIdentityPoolRolesAttachmentAttrsIntterface,
} from '.';

export interface AwsCognitoIdentityPoolRolesAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCognitoIdentityPoolRolesAttachmentArgsIntterface;
  attrs: AwsCognitoIdentityPoolRolesAttachmentAttrsIntterface;

}
