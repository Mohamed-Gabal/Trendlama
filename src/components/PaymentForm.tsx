import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { paymentFormSchema, PaymentFormInputs } from "@/types";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      autoComplete="off"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on Card
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder="John Doe"
          {...register("cardHolder")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="123456789123"
          {...register("cardNumber")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="01/32"
          {...register("expirationDate")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          Cvv
        </label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center"
      >
        Checkout <ShoppingCart className="w-3 h-3"/>
      </button>
    </form>
  );
};
export default PaymentForm;
