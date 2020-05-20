import { AwsCodebuildProjectIntterface } from '../interfaces';
import { AwsCodebuildProjectArgs, AwsCodebuildProjectAttrs } from '.';

export class AwsCodebuildProject implements AwsCodebuildProjectIntterface {
  name: string = 'aws_codebuild_project';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/codebuild_project.html';
  groupName: string = 'CodeBuild Resources';
  args: AwsCodebuildProjectArgs;
  attrs: AwsCodebuildProjectAttrs;

}
