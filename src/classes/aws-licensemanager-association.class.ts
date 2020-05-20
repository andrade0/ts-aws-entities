import { AwsLicensemanagerAssociationIntterface } from '../interfaces';
import { AwsLicensemanagerAssociationArgs, AwsLicensemanagerAssociationAttrs } from '.';

export class AwsLicensemanagerAssociation implements AwsLicensemanagerAssociationIntterface {
  name: string = 'aws_licensemanager_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/licensemanager_association.html';
  groupName: string = 'License Manager Resources';
  args: AwsLicensemanagerAssociationArgs;
  attrs: AwsLicensemanagerAssociationAttrs;

}
