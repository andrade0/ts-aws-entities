import { AwsRamResourceAssociationArgsIntterface, AwsRamResourceAssociationAttrsIntterface } from '.';

export interface AwsRamResourceAssociationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRamResourceAssociationArgsIntterface;
  attrs: AwsRamResourceAssociationAttrsIntterface;

}
