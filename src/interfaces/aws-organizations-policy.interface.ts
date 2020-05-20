import { AwsOrganizationsPolicyArgsIntterface, AwsOrganizationsPolicyAttrsIntterface } from '.';

export interface AwsOrganizationsPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsOrganizationsPolicyArgsIntterface;
  attrs: AwsOrganizationsPolicyAttrsIntterface;

}
