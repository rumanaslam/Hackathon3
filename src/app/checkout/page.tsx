"use client";
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import client from "@/sanity/lib/client";// Import the Sanity client

// Define interfaces for CartItem and OrderDetails
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  additionalInfo: string;
  orderId: string;
}

// Define props for the reusable FormField component
interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  className?: string;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    additionalInfo: "",
    orderId: "",
  });

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  // Calculate the total amount of the cart
  const calculateTotal = (cart: CartItem[]): void => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  // Handle form submission for placing an order
  const handlePlaceOrder = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const orderId = `ORD-${Date.now()}`; // Auto-generated Order ID

    const details: OrderDetails = {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country-region") as string,
      address: formData.get("street-address") as string,
      city: formData.get("town-city") as string,
      province: formData.get("province") as string,
      zip: formData.get("zip-code") as string,
      additionalInfo: formData.get("additional-information") as string,
      orderId,
    };

    const paymentMethod = formData.get("payment-method") as string;

    const orderData = {
      _type: 'order',
      orderId: orderId,
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      phone: details.phone,
      country: details.country,
      address: details.address,
      city: details.city,
      province: details.province,
      zip: details.zip,
      additionalInfo: details.additionalInfo,
      cartItems: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totalAmount: totalAmount,
      paymentMethod: paymentMethod,
      createdAt: new Date().toISOString(),
    };

    try {
      const result = await client.create(orderData);
      console.log('Order created in Sanity:', result);
      setOrderDetails(details);
      setShowModal(true); // Open Modal
    } catch (error) {
      console.error('Error creating order in Sanity:', error);
    }
  };

  // Close the modal
  const handleCloseModal = (): void => setShowModal(false);

  // Reusable Form Field Component
  const FormField = ({
    id,
    label,
    type = "text",
    required = false,
    placeholder = "",
    name,
    className = "",
  }: FormFieldProps): JSX.Element => (
    <div className="h-[110px] flex flex-col justify-between">
      <label htmlFor={id} className="font-medium font-poppins text-base">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          className={`sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] px-5 font-poppins text-[#9F9F9F] text-base ${className}`}
        >
          {name === "country-region" ? (
            <>
              <option value="australia">Australia</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="bhutan">Bhutan</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
              <option value="india">India</option>
              <option value="japan">Japan</option>
              <option value="maldives">Maldives</option>
              <option value="nepal">Nepal</option>
              <option value="pakistan">Pakistan</option>
              <option value="srilanka">Sri Lanka</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">United States</option>
            </>
          ) : (
            <>
              <option value="western">Western Province</option>
              <option value="eastern">Eastern Province</option>
              <option value="southern">Southern Province</option>
              <option value="northern">Northern Province</option>
              <option value="central">Central Province</option>
              <option value="north_western">North Western Province</option>
              <option value="north_central">North Central Province</option>
            </>
          )}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          className={`sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4 ${className}`}
        />
      )}
    </div>
  );

  return (
    <div>
      <div className="flex">
        <div className="max-w-[1242px] mx-auto my-10 flex flex-col lg:flex-row">
          {/* Billing Details Section */}
          <div className="md:w-[608px] w-auto">
            <div className="flex flex-col gap-8 py-10 px-10">
              <h1 className="font-semibold text-4xl/[54px] font-poppins">
                Billing details
              </h1>
              <form className="space-y-8" onSubmit={handlePlaceOrder}>
                <div className="flex gap-5">
                  <FormField
                    id="first-name"
                    label="First Name"
                    name="first-name"
                    required
                    className="sm:w-[150px] w-full"
                  />
                  <FormField
                    id="last-name"
                    label="Last Name"
                    name="last-name"
                    required
                    className="sm:w-[150px] w-full"
                  />
                </div>

                <FormField
                  id="company-name"
                  label="Company Name (Optional)"
                  name="company-name"
                />

                <FormField
                  id="country-region"
                  label="Country / Region"
                  name="country-region"
                  type="select"
                  required
                />

                <FormField
                  id="street-address"
                  label="Street address"
                  name="street-address"
                  required
                />

                <FormField
                  id="town-city"
                  label="Town / City"
                  name="town-city"
                  required
                />

                <FormField
                  id="province"
                  label="Province"
                  name="province"
                  type="select"
                  required
                />

                <FormField
                  id="zip-code"
                  label="ZIP code"
                  name="zip-code"
                  required
                />

                <FormField
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="number"
                  required
                />

                <FormField
                  id="email"
                  label="Email address"
                  name="email"
                  type="email"
                  required
                />

                <div className="h-[121px] flex flex-col justify-between pt-7">
                  <textarea
                    className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4 text-[#9F9F9F] resize-none md:py-6 py-4"
                    id="additional-information"
                    placeholder="Additional information"
                    name="additional-information"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="font-poppins font-normal text-xl/[30px] sm:w-[318px] w-52 h-16 rounded-[15px] hover:bg-slate-50 mx-auto mt-6 border border-black"
                >
                  Place order
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="md:w-[600px] w-auto sm:h-auto px-10 py-28 gap-10">
            <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-full mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Your Cart
              </h2>
              {cartItems.length > 0 ? (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div className="flex items-center gap-4">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={50}
                            height={50}
                            className="rounded-md"
                          />
                        )}
                        <span>{item.title}</span>
                      </div>
                      <span>Rs. {item.price}</span>
                      <span>Qty: {item.quantity}</span>
                      <span>Rs. {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center">Your cart is empty.</p>
              )}
            </div>

            <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-full mx-auto mt-8">
              <h2 className="text-3xl font-semibold text-center mb-16">
                Cart Totals
              </h2>
              <div className="flex justify-between mb-5">
                <span className="text-base font-semibold">Subtotal</span>
                <span className="text-base text-[#9F9F9F]">
                  Rs. {totalAmount}
                </span>
              </div>
              <div className="flex justify-between font-medium mb-5">
                <span className="text-base font-semibold">Total</span>
                <span className="text-xl text-[#B88E2F] font-semibold">
                  Rs. {totalAmount}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-10">
              <span className="flex gap-2 items-center">
                <span className="w-[14px] h-[14px] rounded-full bg-black"></span>
                <p className="font-poppins font-normal text-base">
                  Direct Bank Transfer
                </p>
              </span>
              <p className="font-poppins font-light text-base text-[#9F9F9F]">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
              </p>
              <div>
                <label
                  className="text-base font-poppins font-medium text-[#9F9F9F]"
                  htmlFor="dbt"
                >
                  <input
                    type="radio"
                    className="mr-2"
                    id="dbt"
                    name="payment-method"
                    value="bank_transfer"
                  />
                  Direct Bank Transfer
                </label>
                <br />
                <label
                  className="text-base font-poppins font-medium text-[#9F9F9F]"
                  htmlFor="cod"
                >
                  <input
                    type="radio"
                    className="mr-2"
                    id="cod"
                    name="payment-method"
                    value="cod"
                  />
                  Cash On Delivery
                </label>
              </div>
              <p className="text-base font-poppins font-light">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our{" "}
                <span className="font-semibold">privacy policy.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Order Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-[500px]">
              <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
              <p>
                <strong>Order ID:</strong> {orderDetails.orderId}
              </p>
              <p>
                <strong>Name:</strong> {orderDetails.firstName}{" "}
                {orderDetails.lastName}
              </p>
              <p>
                <strong>Email:</strong> {orderDetails.email}
              </p>
              <p>
                <strong>Phone:</strong> {orderDetails.phone}
              </p>
              <p>
                <strong>Address:</strong> {orderDetails.address},{" "}
                {orderDetails.city}, {orderDetails.province},{" "}
                {orderDetails.country} - {orderDetails.zip}
              </p>
              <p>
                <strong>Total Amount:</strong> Rs. {totalAmount}
              </p>
              <p>
                <strong>Additional Info:</strong>{" "}
                {orderDetails.additionalInfo || "N/A"}
              </p>
              <button
                onClick={handleCloseModal}
                className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}