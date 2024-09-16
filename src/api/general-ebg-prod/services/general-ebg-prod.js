'use strict';

/**
 * general-ebg-prod service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general-ebg-prod.general-ebg-prod');
