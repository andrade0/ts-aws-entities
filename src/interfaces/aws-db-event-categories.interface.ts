import { AwsDbEventCategoriesArgsIntterface, AwsDbEventCategoriesAttrsIntterface } from '.';

export interface AwsDbEventCategoriesIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDbEventCategoriesArgsIntterface;
  attrs: AwsDbEventCategoriesAttrsIntterface;

}
