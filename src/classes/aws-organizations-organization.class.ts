import { AwsOrganizationsOrganizationIntterface } from '../interfaces';
import { AwsOrganizationsOrganizationArgs, AwsOrganizationsOrganizationAttrs } from '.';

export class AwsOrganizationsOrganization implements AwsOrganizationsOrganizationIntterface {
  name: string = 'aws_organizations_organization';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/organizations_organization.html';
  groupName: string = 'Organizations Resources';
  args: AwsOrganizationsOrganizationArgs;
  attrs: AwsOrganizationsOrganizationAttrs;

}
