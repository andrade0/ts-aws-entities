import { AwsAmiIdsArgsIntterface } from '../interfaces';
import { AwsAmiIdsArgsExecutableUsers } from '.';

export class AwsAmiIdsArgs implements AwsAmiIdsArgsIntterface {
  executable_users?: AwsAmiIdsArgsExecutableUsers;
  filter?: string;
  owners?: string;
  name_regex?: string;

}
