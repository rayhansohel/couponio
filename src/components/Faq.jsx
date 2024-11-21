import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Faq = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
          offset: 300, 
        });
      }, []);
  return (
    <div className="w-11/12 mx-auto" data-aos="fade-up">
      <div className="join join-vertical w-full rounded-3xl bg-[#010409b2] backdrop-blur-xl">
        <div className="collapse collapse-arrow join-item border border-gray-900 ">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-lg">
          What is Couponio and how does it work?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            <p>Couponio is an online platform that aggregates the latest and most exclusive discount coupons for a wide range of online stores and services. By browsing our website, users can easily find valid discount codes, promotions, and special deals. Once you find a coupon, simply click on it, copy the code, and apply it at checkout to save money on your purchase. Couponio makes it easier to access discounts and maximize savings on your online shopping experience.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-gray-900 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg">
          How do I use a coupon from Couponio?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            <p>Using a coupon from Couponio is simple. First, browse through the available coupons for your desired store or product. Once you find a coupon that suits your needs, click on the coupon code to copy it. Then, head over to the store’s checkout page, paste the code into the "promo code" or "discount code" field, and your discount will be applied to your order. It's that easy to start saving money while shopping online!</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-gray-900 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg">
          Are the coupons on Couponio up-to-date and valid?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            <p>Yes! At Couponio, we strive to provide only the most current and valid coupons to our users. Our team constantly updates the site to ensure that all deals are active and ready to be used. However, some coupons may expire or change over time, so we encourage users to act quickly when they find a deal they like. If you encounter any expired coupons, feel free to report them, and we will remove them from the site promptly.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-gray-900 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg">
          Do I need to create an account to use Couponio?
          </div>
          <div className="collapse-content text-sm text-gray-400">
            <p>Absolutely! Couponio encourages users to share any valid coupons they find with others. If you have a coupon that’s not already on the platform, you can submit it through our easy-to-use form, and we’ll verify and add it to the site. Sharing coupons helps others save money and strengthens the Couponio community, allowing everyone to benefit from the best deals available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
