import { AwsInspectorAssessmentTemplateArgsIntterface } from '../interfaces';


export class AwsInspectorAssessmentTemplateArgs implements AwsInspectorAssessmentTemplateArgsIntterface {
  name: string;
  target_arn: string;
  duration: string;
  rules_package_arns: string;

}
