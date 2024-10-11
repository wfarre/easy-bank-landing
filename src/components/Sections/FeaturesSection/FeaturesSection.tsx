import FeatureCard from "../../Cards/FeatureCard";
import IconApi from "./assets/images/icon-api.svg";
import IconBudgeting from "./assets/images/icon-budgeting.svg";
import IconOnboarding from "./assets/images/icon-onboarding.svg";
import IconOnline from "./assets/images/icon-online.svg";

const features = [
  {
    title: "Online Banking",
    content:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    picture: IconOnline,
  },
  {
    title: "Simple Budgeting",
    content:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    picture: IconBudgeting,
  },
  {
    title: "Fast Onboarding",
    content:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    picture: IconOnboarding,
  },
  {
    title: "Open API",
    content:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    picture: IconApi,
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="bg-bg-secondary px-6 py-16 text-center lg:px-40 lg:py-28 lg:text-left"
      id="features"
    >
      <h2 className="text-dark-blue mb-6 text-2xl lg:text-4xl">
        Why choose Easybank?
      </h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div className="mt-16 flex flex-wrap justify-between gap-5">
        {features.map((feature) => (
          <FeatureCard
            title={feature.title}
            content={feature.content}
            picture={feature.picture}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
