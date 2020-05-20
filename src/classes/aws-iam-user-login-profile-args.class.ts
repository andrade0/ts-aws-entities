import { AwsIamUserLoginProfileArgsIntterface } from '../interfaces';


export class AwsIamUserLoginProfileArgs implements AwsIamUserLoginProfileArgsIntterface {
  user: string;
  pgp_key: string;
  password_reset_required: string;
  password_length: string;

}
