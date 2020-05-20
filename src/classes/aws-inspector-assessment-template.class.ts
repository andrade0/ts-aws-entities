import { AwsInspectorAssessmentTemplateIntterface } from '../interfaces';
import { AwsInspectorAssessmentTemplateArgs, AwsInspectorAssessmentTemplateAttrs } from '.';

export class AwsInspectorAssessmentTemplate implements AwsInspectorAssessmentTemplateIntterface {
  name: string = 'aws_inspector_assessment_template';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html';
  groupName: string = 'Inspector Resources';
  args: AwsInspectorAssessmentTemplateArgs;
  attrs: AwsInspectorAssessmentTemplateAttrs;

}
