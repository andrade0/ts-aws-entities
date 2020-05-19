import { AwsInspectorAssessmentTargetIntterface } from '../interfaces';
import { AwsInspectorAssessmentTargetArgs,  AwsInspectorAssessmentTargetAttrs } from '.';

export class AwsInspectorAssessmentTarget implements AwsInspectorAssessmentTargetIntterface {
  	name: string = 'aws_inspector_assessment_target';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/inspector_assessment_target.html';
	groupName: string = 'Inspector Resources';
	args: AwsInspectorAssessmentTargetArgs;
	attrs: AwsInspectorAssessmentTargetAttrs;

}
