import { AwsSagemakerModelIntterface } from '../interfaces';
import { AwsSagemakerModelArgs, AwsSagemakerModelAttrs } from '.';

export class AwsSagemakerModel implements AwsSagemakerModelIntterface {
  name: string = 'aws_sagemaker_model';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html';
  groupName: string = 'Sagemaker Resources';
  args: AwsSagemakerModelArgs;
  attrs: AwsSagemakerModelAttrs;

}
