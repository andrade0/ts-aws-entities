import { AwsGlueClassifierArgsIntterface } from '../interfaces';
import {
  AwsGlueClassifierArgsGrokClassifier,
  AwsGlueClassifierArgsJsonClassifier,
  AwsGlueClassifierArgsXmlClassifier,
} from '.';

export class AwsGlueClassifierArgs implements AwsGlueClassifierArgsIntterface {
  grok_classifier?: AwsGlueClassifierArgsGrokClassifier;
  json_classifier?: AwsGlueClassifierArgsJsonClassifier;
  name: string;
  xml_classifier?: AwsGlueClassifierArgsXmlClassifier;

}
