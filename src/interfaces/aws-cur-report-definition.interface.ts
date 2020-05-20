import { AwsCurReportDefinitionArgsIntterface, AwsCurReportDefinitionAttrsIntterface } from '.';

export interface AwsCurReportDefinitionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCurReportDefinitionArgsIntterface;
  attrs: AwsCurReportDefinitionAttrsIntterface;

}
