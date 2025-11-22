import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Lock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUpVariants, containerVariants, itemVariants } from "@/hooks/use-scroll-animation";

interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
  billingAddress: boolean;
}

const INITIAL_CHECKOUT_DATA: CheckoutData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  cardNumber: "",
  cardExpiry: "",
  cardCVC: "",
  billingAddress: false,
};

const SAMPLE_ORDER = {
  items: [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 199,
      quantity: 1,
    },
    {
      id: "4",
      name: "4K Webcam",
      price: 159,
      quantity: 2,
    },
  ],
  subtotal: 517,
  shipping: 0,
  tax: 51.7,
  total: 568.7,
};

export default function CheckoutPage() {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(
    INITIAL_CHECKOUT_DATA
  );
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [currentStep, setCurrentStep] = useState("shipping");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setCheckoutData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header cartCount={0} />

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Order #: 12345678
            </p>
            <p className="text-gray-600 mb-8">
              We've sent a confirmation email to {checkoutData.email}
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-3">
              <h3 className="font-semibold text-gray-900">Order Summary</h3>
              {SAMPLE_ORDER.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-gray-600"
                >
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-3 font-semibold text-gray-900 flex justify-between">
                <span>Total</span>
                <span>${SAMPLE_ORDER.total.toFixed(2)}</span>
              </div>
            </div>

            <Link to="/">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header cartCount={0} />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex-1">
        {/* Back Button */}
        <Link
          to="/cart"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <Tabs value={currentStep} onValueChange={setCurrentStep} className="p-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="shipping" className="text-sm">
                    Shipping
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="text-sm">
                    Payment
                  </TabsTrigger>
                  <TabsTrigger value="review" className="text-sm">
                    Review
                  </TabsTrigger>
                </TabsList>

                {/* Shipping Tab */}
                <TabsContent value="shipping" className="space-y-6 mt-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Shipping Address
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={checkoutData.firstName}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={checkoutData.lastName}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={checkoutData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={checkoutData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={checkoutData.address}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={checkoutData.city}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={checkoutData.state}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={checkoutData.zipCode}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => setCurrentStep("payment")}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Continue to Payment
                  </Button>
                </TabsContent>

                {/* Payment Tab */}
                <TabsContent value="payment" className="space-y-6 mt-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Payment Method
                  </h2>

                  <div className="space-y-4">
                    {[
                      { value: "card", label: "Credit/Debit Card" },
                      { value: "paypal", label: "PayPal" },
                      { value: "bank", label: "Bank Transfer" },
                    ].map((method) => (
                      <label
                        key={method.value}
                        className={cn(
                          "border-2 rounded-lg p-4 cursor-pointer transition-all",
                          paymentMethod === method.value
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.value}
                            checked={paymentMethod === method.value}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="font-medium text-gray-900">
                            {method.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-6">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={checkoutData.cardNumber}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Expiry Date</Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            placeholder="MM/YY"
                            value={checkoutData.cardExpiry}
                            onChange={handleInputChange}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCVC">CVC</Label>
                          <Input
                            id="cardCVC"
                            name="cardCVC"
                            placeholder="123"
                            value={checkoutData.cardCVC}
                            onChange={handleInputChange}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="billingAddress"
                          checked={checkoutData.billingAddress}
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">
                          Billing address same as shipping
                        </span>
                      </label>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={() => setCurrentStep("shipping")}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStep("review")}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      Review Order
                    </Button>
                  </div>
                </TabsContent>

                {/* Review Tab */}
                <TabsContent value="review" className="space-y-6 mt-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Review Your Order
                  </h2>

                  <div className="space-y-4 border-b pb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Shipping To</p>
                      <p className="font-semibold text-gray-900">
                        {checkoutData.firstName} {checkoutData.lastName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {checkoutData.address}
                      </p>
                      <p className="text-sm text-gray-600">
                        {checkoutData.city}, {checkoutData.state}{" "}
                        {checkoutData.zipCode}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handlePlaceOrder} className="space-y-4">
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-base"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Place Order
                    </Button>
                    <Button
                      onClick={() => setCurrentStep("payment")}
                      variant="outline"
                      className="w-full"
                    >
                      Back to Payment
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6 border-b pb-6">
              {SAMPLE_ORDER.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${SAMPLE_ORDER.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${SAMPLE_ORDER.tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t pt-4 flex justify-between">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${SAMPLE_ORDER.total.toFixed(2)}
              </span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-3">
              <Lock className="w-4 h-4" />
              Secure payment powered by Stripe
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
