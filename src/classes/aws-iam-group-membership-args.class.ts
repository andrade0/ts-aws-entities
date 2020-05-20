import { AwsIamGroupMembershipArgsIntterface } from '../interfaces';


export class AwsIamGroupMembershipArgs implements AwsIamGroupMembershipArgsIntterface {
  name: string;
  users: string;
  group: string;

}
