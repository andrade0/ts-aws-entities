import { AwsKmsCiphertextArgsIntterface } from '../interfaces';


export class AwsKmsCiphertextArgs implements AwsKmsCiphertextArgsIntterface {
  plaintext: string;
  key_id: string;
  context?: string;

}
