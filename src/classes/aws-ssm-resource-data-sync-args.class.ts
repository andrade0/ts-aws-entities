import { AwsSsmResourceDataSyncArgsIntterface } from '../interfaces';
import { AwsSsmResourceDataSyncArgsS3Destination } from '.';

export class AwsSsmResourceDataSyncArgs implements AwsSsmResourceDataSyncArgsIntterface {
  name: string;
  s3_destination: AwsSsmResourceDataSyncArgsS3Destination;

}
