import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

export const average = new Trend('average');

export let options = {
  vus: 1,
  duration: '5s',
  thresholds: {
    average: ['avg<500'],
  },
};

// 'https://test.k6.io'
export default function () {
  let response = http.get(__ENV.BASE_URL);

  const responseTime = response.timings.duration;
  average.add(responseTime);
}
