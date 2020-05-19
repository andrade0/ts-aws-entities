import { AwsIamOpenidConnectProviderIntterface } from '../interfaces';
import { AwsIamOpenidConnectProviderArgs,  AwsIamOpenidConnectProviderAttrs } from '.';

export class AwsIamOpenidConnectProvider implements AwsIamOpenidConnectProviderIntterface {
  	name: string = 'aws_iam_openid_connect_provider';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html';
	groupName: string = 'IAM Resources';
	args: AwsIamOpenidConnectProviderArgs;
	attrs: AwsIamOpenidConnectProviderAttrs;

}
