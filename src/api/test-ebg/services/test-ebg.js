'use strict';

/**
 * test-ebg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-ebg.test-ebg');
