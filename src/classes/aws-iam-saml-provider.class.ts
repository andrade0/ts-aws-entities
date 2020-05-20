import { AwsIamSamlProviderIntterface } from '../interfaces';
import { AwsIamSamlProviderArgs, AwsIamSamlProviderAttrs } from '.';

export class AwsIamSamlProvider implements AwsIamSamlProviderIntterface {
  name: string = 'aws_iam_saml_provider';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_saml_provider.html';
  groupName: string = 'IAM Resources';
  args: AwsIamSamlProviderArgs;
  attrs: AwsIamSamlProviderAttrs;

}
