/**
 * brand controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::brand.brand',({ strapi }) =>  ({
    async find(ctx) {
        // Ensure the query includes required fields
        ctx.query = {
            ...ctx.query,
            populate: {
                brandslogos: true // ✅ Populate the brandslogos media field
            }
        };

        // Calling the default core action
        const { data, meta } = await super.find(ctx);

        // Adding custom metadata
        meta.date = Date.now();

        return { data, meta };
    },
}));
