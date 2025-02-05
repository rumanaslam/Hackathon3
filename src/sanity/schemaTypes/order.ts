import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    defineField({
      name: "orderId",
      title: "Order ID",
      type: "string",
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "country",
      title: "Country / Region",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "Town / City",
      type: "string",
    }),
    defineField({
      name: "province",
      title: "Province",
      type: "string",
    }),
    defineField({
      name: "zip",
      title: "ZIP Code",
      type: "string",
    }),
    defineField({
      name: "additionalInfo",
      title: "Additional Information",
      type: "text",
    }),
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "id", title: "Product ID", type: "number" }),
            defineField({ name: "title", title: "Product Title", type: "string" }),
            defineField({ name: "price", title: "Price", type: "number" }),
            defineField({ name: "quantity", title: "Quantity", type: "number" }),
            defineField({ name: "image", title: "Product Image", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    }),
    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Direct Bank Transfer", value: "bank_transfer" },
          { title: "Cash On Delivery", value: "cod" },
        ],
      },
    }),
    defineField({
      name: "createdAt",
      title: "Order Date",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
  ],
});
