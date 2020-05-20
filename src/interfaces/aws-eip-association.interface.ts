import { AwsEipAssociationArgsIntterface, AwsEipAssociationAttrsIntterface } from '.';

export interface AwsEipAssociationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEipAssociationArgsIntterface;
  attrs: AwsEipAssociationAttrsIntterface;

}
