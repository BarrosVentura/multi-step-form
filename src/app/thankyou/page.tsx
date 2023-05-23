import Image from "next/image";
import IconThankYou from "../../../public/images/icon-thank-you.svg";

export default function ThankYouPage() {
  return (
    <>
      <Image src={IconThankYou} alt="" />
      <h1 className="text-3xl font-medium text-marine-blue mb-4 mt-8">
        Thank you!
      </h1>
      <p className="text-cool-gray text-sm mb-9 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        plataform. If you ever need support, please feel free to email us at
        support@loramgaming.com
      </p>
    </>
  );
}
