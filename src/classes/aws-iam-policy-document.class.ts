import { AwsIamPolicyDocumentIntterface } from '../interfaces';
import { AwsIamPolicyDocumentArgs, AwsIamPolicyDocumentAttrs } from '.';

export class AwsIamPolicyDocument implements AwsIamPolicyDocumentIntterface {
  name: string = 'aws_iam_policy_document';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html';
  groupName: string = 'Data Sources';
  args: AwsIamPolicyDocumentArgs;
  attrs: AwsIamPolicyDocumentAttrs;

}
