import { AwsSsmDocumentIntterface } from '../interfaces';
import { AwsSsmDocumentArgs, AwsSsmDocumentAttrs } from '.';

export class AwsSsmDocument implements AwsSsmDocumentIntterface {
  name: string = 'aws_ssm_document';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_document.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmDocumentArgs;
  attrs: AwsSsmDocumentAttrs;

}
