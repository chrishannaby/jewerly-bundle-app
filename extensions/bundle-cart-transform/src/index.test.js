import { describe, it, expect } from "vitest";
import cartTransform from "./index";

/**
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 */

describe("cart transform function", () => {
  it("returns no operations", () => {
    const result = cartTransform({});
    const expected = /** @type {FunctionResult} */ ({ operations: [] });

    expect(result).toEqual(expected);
  });
});

describe("cart transform function", () => {
  it("returns a single operation to merge a bundle", () => {
    const result = cartTransform(testBundle);
    const expected = /** @type {FunctionResult} */ ({
      operations: [
        {
          merge: {
            parentVariantId: "gid://shopify/ProductVariant/45636604199211",
            title: "Double Heart Gemstone Ring with Accents",
            cartLines: [
              {
                cartLineId:
                  "gid://shopify/CartLine/3a2d5dae-8eb6-47f1-aff3-b94a295e84da",
                quantity: 1,
              },
              {
                cartLineId:
                  "gid://shopify/CartLine/9e9a8051-c176-4792-a352-fb4852630e0d",
                quantity: 1,
              },
              {
                cartLineId:
                  "gid://shopify/CartLine/6d3786a3-b730-4ae5-bc3a-f4c8c95abf03",
                quantity: 1,
              },
              {
                cartLineId:
                  "gid://shopify/CartLine/357c73a9-95a2-4dc5-a0af-c9c70cd98b74",
                quantity: 1,
              },
            ],
          },
        },
      ],
    });

    expect(result).toEqual(expected);
  });
});

const testBundle = {
  cart: {
    lines: [
      {
        id: "gid://shopify/CartLine/9e9a8051-c176-4792-a352-fb4852630e0d",
        quantity: 1,
        bundleId: null,
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/45636603937067",
          title: "Garnet",
          product: {
            id: "gid://shopify/Product/8423920927019",
            title: "4mm x 4mm Heart Cut Stone",
            bundleConfiguration: null,
          },
        },
      },
      {
        id: "gid://shopify/CartLine/3a2d5dae-8eb6-47f1-aff3-b94a295e84da",
        quantity: 1,
        bundleId: {
          value: "1234",
        },
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/45636604199211",
          title: "925 Sterling Silver / 4",
          product: {
            id: "gid://shopify/Product/8423921058091",
            title: "Double Heart Gemstone Ring with Accents",
            bundleConfiguration: {
              value:
                '{"parentProduct":"gid://shopify/Product/8423921058091","accentStones":"gid://shopify/Product/8423920959787","Stone1":"gid://shopify/Product/8423920927019","Stone2":"gid://shopify/Product/8423920927019"}',
            },
          },
        },
      },
      {
        id: "gid://shopify/CartLine/9e9a8051-c176-4792-a352-fb4852630e0d",
        quantity: 1,
        bundleId: {
          value: "1234",
        },
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/45636603937067",
          title: "Garnet",
          product: {
            id: "gid://shopify/Product/8423920927019",
            title: "4mm x 4mm Heart Cut Stone",
            bundleConfiguration: null,
          },
        },
      },
      {
        id: "gid://shopify/CartLine/6d3786a3-b730-4ae5-bc3a-f4c8c95abf03",
        quantity: 1,
        bundleId: {
          value: "1234",
        },
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/45636603969835",
          title: "Amethyst",
          product: {
            id: "gid://shopify/Product/8423920927019",
            title: "4mm x 4mm Heart Cut Stone",
            bundleConfiguration: null,
          },
        },
      },
      {
        id: "gid://shopify/CartLine/357c73a9-95a2-4dc5-a0af-c9c70cd98b74",
        quantity: 1,
        bundleId: {
          value: "1234",
        },
        merchandise: {
          __typename: "ProductVariant",
          id: "gid://shopify/ProductVariant/45636604035371",
          title: "Genuine Diamonds",
          product: {
            id: "gid://shopify/Product/8423920959787",
            title: "Accent Stone",
            bundleConfiguration: null,
          },
        },
      },
    ],
  },
};
