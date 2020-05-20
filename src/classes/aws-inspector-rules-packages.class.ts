import { AwsInspectorRulesPackagesIntterface } from '../interfaces';
import { AwsInspectorRulesPackagesArgs, AwsInspectorRulesPackagesAttrs } from '.';

export class AwsInspectorRulesPackages implements AwsInspectorRulesPackagesIntterface {
  name: string = 'aws_inspector_rules_packages';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html';
  groupName: string = 'Data Sources';
  args: AwsInspectorRulesPackagesArgs;
  attrs: AwsInspectorRulesPackagesAttrs;

}
