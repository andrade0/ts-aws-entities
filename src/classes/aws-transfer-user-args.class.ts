import { AwsTransferUserArgsIntterface } from '../interfaces';


export class AwsTransferUserArgs implements AwsTransferUserArgsIntterface {
  server_id: string;
  user_name: string;
  home_directory?: string;
  policy?: string;
  role: string;
  tags?: string;

}
