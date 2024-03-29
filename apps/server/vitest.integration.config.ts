/// <reference types='vitest' />
import commonConfig from '../../vitest.config';
import { defineProject, mergeConfig } from 'vitest/config';

export default mergeConfig(
  commonConfig,
  defineProject({
    test: {
      include: [
        'src/tests/**/*integration.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      ],
      poolOptions: { threads: { singleThread: true } },
      server: {
        deps: {
          inline: ['@fastify/autoload'],
        },
      },
    },
  })
);
