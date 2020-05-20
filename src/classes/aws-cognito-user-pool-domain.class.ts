import { AwsCognitoUserPoolDomainIntterface } from '../interfaces';
import { AwsCognitoUserPoolDomainArgs, AwsCognitoUserPoolDomainAttrs } from '.';

export class AwsCognitoUserPoolDomain implements AwsCognitoUserPoolDomainIntterface {
  name: string = 'aws_cognito_user_pool_domain';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html';
  groupName: string = 'Cognito Resources';
  args: AwsCognitoUserPoolDomainArgs;
  attrs: AwsCognitoUserPoolDomainAttrs;

}
