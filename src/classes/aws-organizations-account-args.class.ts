import { AwsOrganizationsAccountArgsIntterface } from '../interfaces';


export class AwsOrganizationsAccountArgs implements AwsOrganizationsAccountArgsIntterface {
  name: string;
  email: string;
  iam_user_access_to_billing?: string;
  role_name?: string;

}
