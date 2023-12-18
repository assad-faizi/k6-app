import http from 'k6/http';
import { sleep } from 'k6';

const vus = 1;
const duration = '10s';

export const options = {
  scenarios: {
    my_web_test: {
      exec: 'webtest',
      executor: 'constant-vus',
      vus: vus,
      duration: duration,
    },
    my_other_web_test: {
      exec: 'otherwebtest',
      executor: 'constant-vus',
      vus: vus,
      duration: duration,
    },
  },
};

export function webtest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(Math.random() * 2);
}

export function otherwebtest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(Math.random() * 1);
}
