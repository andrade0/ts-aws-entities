import { AwsBillingServiceAccountIntterface } from '../interfaces';
import { AwsBillingServiceAccountArgs, AwsBillingServiceAccountAttrs } from '.';

export class AwsBillingServiceAccount implements AwsBillingServiceAccountIntterface {
  name: string = 'aws_billing_service_account';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/billing_service_account.html';
  groupName: string = 'Data Sources';
  args: AwsBillingServiceAccountArgs;
  attrs: AwsBillingServiceAccountAttrs;

}
