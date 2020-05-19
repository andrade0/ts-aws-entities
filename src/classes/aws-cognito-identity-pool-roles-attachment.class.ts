import { AwsCognitoIdentityPoolRolesAttachmentIntterface } from '../interfaces';
import { AwsCognitoIdentityPoolRolesAttachmentArgs,  AwsCognitoIdentityPoolRolesAttachmentAttrs } from '.';

export class AwsCognitoIdentityPoolRolesAttachment implements AwsCognitoIdentityPoolRolesAttachmentIntterface {
  	name: string = 'aws_cognito_identity_pool_roles_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html';
	groupName: string = 'Cognito Resources';
	args: AwsCognitoIdentityPoolRolesAttachmentArgs;
	attrs: AwsCognitoIdentityPoolRolesAttachmentAttrs;

}
