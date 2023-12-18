import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

export const average = new Trend('average');

export let options = {
  vus: 1,
  duration: '5s',
  thresholds: {
    average: ['avg<10'],
  },
};

export default function () {
  let response = http.get('https://test.k6.io');

  const responseTime = response.timings.duration;
  average.add(responseTime);
}
