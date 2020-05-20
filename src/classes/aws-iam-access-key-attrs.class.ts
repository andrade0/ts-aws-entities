import { AwsIamAccessKeyAttrsIntterface } from '../interfaces';


export class AwsIamAccessKeyAttrs implements AwsIamAccessKeyAttrsIntterface {
  id?: string;
  user?: string;
  key_fingerprint?: string;
  secret?: string;
  encrypted_secret?: string;
  ses_smtp_password?: string;
  status?: string;

}
