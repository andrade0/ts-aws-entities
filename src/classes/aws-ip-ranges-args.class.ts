import { AwsIpRangesArgsIntterface } from '../interfaces';
import { AwsIpRangesArgsRegions } from '.';

export class AwsIpRangesArgs implements AwsIpRangesArgsIntterface {
  regions?: AwsIpRangesArgsRegions;
  services: string;

}
