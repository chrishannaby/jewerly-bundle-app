// @ts-check

/**
 * @typedef {import("../generated/api").InputQuery} InputQuery
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 */

export default /**
 * @param {InputQuery} input
 * @returns {FunctionResult}
 */
(input) => {
  /**
   * @type {FunctionResult}
   */
  const result = {
    operations: [],
  };

  const lines = input.cart?.lines;
  if (!lines) return result;
  // group lines by bundleId
  const bundles = lines.reduce((acc, line) => {
    const bundleId = line.bundleId?.value;
    if (!bundleId) return acc;

    const bundleLines = acc[bundleId] || [];
    return {
      ...acc,
      [bundleId]: [...bundleLines, line],
    };
  }, {});
  // If there are no bundles, return no changes
  if (Object.keys(bundles).length === 0) return result;

  // For each bundle find the parent product which contains the bundleConfiguration metafield
  // parse the configuration from the metafield and validate the contents of the bundle against the configuration
  // if the bundle is valid, return a merge operation to merge the bundle into a single line
  // If there are no valid bundles, return no changes

  for (const bundle in bundles) {
    const bundleLines = bundles[bundle];
    const parent = bundleLines.find(
      (line) => line.merchandise.product.bundleConfiguration
    );
    if (!parent) continue;
    // here we would parse the bundleConfiguration metafield and validate the bundle
    // but I'll skip that for this example
    const cartLines = bundleLines.map((line) => {
      return { cartLineId: line.id, quantity: line.quantity };
    });
    result.operations.push({
      merge: {
        parentVariantId: parent.merchandise.id,
        title: parent.merchandise.product.title,
        cartLines,
      },
    });
  }

  return result;
};
