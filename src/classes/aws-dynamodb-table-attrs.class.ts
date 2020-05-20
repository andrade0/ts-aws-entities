import { AwsDynamodbTableAttrsIntterface } from '../interfaces';


export class AwsDynamodbTableAttrs implements AwsDynamodbTableAttrsIntterface {
  arn?: string;
  id?: string;
  stream_arn?: string;
  stream_label?: string;

}
