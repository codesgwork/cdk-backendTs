#!/usr/bin/env node
// import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkBackendTsStack } from '../lib/cdk-backend_ts-stack';

const app = new cdk.App();

const stack = new CdkBackendTsStack(app, 'CdkBackendTsStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});