import { AwsCurReportDefinitionIntterface } from '../interfaces';
import { AwsCurReportDefinitionArgs,  AwsCurReportDefinitionAttrs } from '.';

export class AwsCurReportDefinition implements AwsCurReportDefinitionIntterface {
  	name: string = 'aws_cur_report_definition';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cur_report_definition.html';
	groupName: string = 'Cost and Usage Report Resources';
	args: AwsCurReportDefinitionArgs;
	attrs: AwsCurReportDefinitionAttrs;

}
