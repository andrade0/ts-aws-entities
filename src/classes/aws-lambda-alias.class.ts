import { AwsLambdaAliasIntterface } from '../interfaces';
import { AwsLambdaAliasArgs, AwsLambdaAliasAttrs } from '.';

export class AwsLambdaAlias implements AwsLambdaAliasIntterface {
  name: string = 'aws_lambda_alias';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lambda_alias.html';
  groupName: string = 'Lambda Resources';
  args: AwsLambdaAliasArgs;
  attrs: AwsLambdaAliasAttrs;

}
