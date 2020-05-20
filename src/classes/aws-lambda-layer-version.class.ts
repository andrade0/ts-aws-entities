import { AwsLambdaLayerVersionIntterface } from '../interfaces';
import { AwsLambdaLayerVersionArgs, AwsLambdaLayerVersionAttrs } from '.';

export class AwsLambdaLayerVersion implements AwsLambdaLayerVersionIntterface {
  name: string = 'aws_lambda_layer_version';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html';
  groupName: string = 'Lambda Resources';
  args: AwsLambdaLayerVersionArgs;
  attrs: AwsLambdaLayerVersionAttrs;

}
