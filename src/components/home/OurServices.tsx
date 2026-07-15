import type { FC, SVGProps } from "react";
import {
  NeedsAnalysisIcon,
  PolicyReviewIcon,
  LivingBenefitsIcon,
  MortgageIcon,
  TermLifeIcon,
  FinalExpenseIcon,
  DebtIcon,
  WillsTrustIcon,
  AnnuityIcon,
} from "./icons";

type Service = {
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Complimentary Financial Needs Analysis",
    description:
      "A personalized review to help identify your financial goals and protection needs.",
    Icon: NeedsAnalysisIcon,
  },
  {
    title: "No-Cost Review of Your Existing Insurance Policies",
    description: "To make sure your coverage still meets your needs.",
    Icon: PolicyReviewIcon,
  },
  {
    title: "Life Insurance with Living Benefits",
    description:
      "Protection for you and your family, with benefits that may be accessed if you experience a qualifying critical, chronic, or terminal illness.",
    Icon: LivingBenefitsIcon,
  },
  {
    title: "Mortgage Protection",
    description:
      "Help your loved ones keep their home financially secure while also providing the advantages of Living Benefits.",
    Icon: MortgageIcon,
  },
  {
    title: "Term Life Insurance with Living Benefits",
    description:
      "Affordable coverage available for terms of up to 35 years, offering both protection and valuable Living Benefits.",
    Icon: TermLifeIcon,
  },
  {
    title: "Final Expense Planning",
    description:
      "Help ease the financial burden of funeral and end-of-life expenses for your family.",
    Icon: FinalExpenseIcon,
  },
  {
    title: "Debt Management Solutions",
    description:
      "Strategies to help improve cash flow and work toward greater financial stability.",
    Icon: DebtIcon,
  },
  {
    title: "Wills and Trust Referrals",
    description:
      "Guidance to help you protect your assets and preserve your legacy for the people you love.",
    Icon: WillsTrustIcon,
  },
  {
    title: "Indexed Annuities with Guaranteed Lifetime Income",
    description:
      "Retirement solutions designed to provide protected growth potential and income you can count on for life.",
    Icon: AnnuityIcon,
  },
];

const OurServices = () => {
  return (
    <section
      id="services"
      className="section bg-surface-2"
      aria-labelledby="services-heading"
    >
      <div className="container space-y-14">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="eyebrow justify-center">My Services Include</p>
          <h2 id="services-heading" className="headline text-3xl md:text-4xl">
            Protection &amp; Planning, Tailored to You
          </h2>
          <p className="text-lg leading-relaxed text-body">
            I provide personalized financial protection and planning solutions
            designed to help individuals and families build a more secure future.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="card group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-grad-brand text-white shadow-card">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-ink">
                {title}
              </h3>
              <p className="mt-2 text-body">{description}</p>
            </li>
          ))}
        </ul>

        {/* Living Benefits explainer + required legal disclosures */}
        <div className="card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center bg-grad-navy p-8 text-white lg:p-10">
              <p className="eyebrow justify-start !text-teal before:!bg-teal">
                Life insurance you don&rsquo;t have to die to use
              </p>
              <h3 className="headline mt-4 text-2xl text-white md:text-3xl">
                Life Insurance with Living Benefits
              </h3>
              <p className="mt-4 leading-relaxed text-white/85">
                Far from the traditional insurance you have to die to use, it
                covers you if you die too soon, live too long, or become ill —
                so you can protect your family and your future at the same time.
              </p>
              <a href="#contact" className="btn-primary mt-8 w-fit">
                See if it fits your plan
              </a>
            </div>

            <div className="space-y-5 p-8 text-sm leading-relaxed text-muted lg:p-10">
              <p>
                You probably know that life insurance provides a valuable death
                benefit for your family or business if you were to die. But are
                you familiar with life insurance you don&rsquo;t have to die to
                use? Far from the traditional insurance you have to die to use,
                it covers you if you die too soon, live too long or become ill.
                And the living benefits can provide financial resources in the
                event of a chronic, critical or terminal illness (in applicable
                states) if you live too long. Worried about outliving your money?
                If sufficiently funded, a permanent life insurance policy can
                potentially accumulate cash value that can be accessed using
                policy loans and withdrawals to supplement your retirement
                income. If you&rsquo;re looking for protection in case
                you die too soon, become ill, or live too long, we will work with
                you. It&apos;s our goal to provide you peace of mind.
              </p>
              <p>
                Living benefits are provided by no-additional premium
                accelerated benefit riders. Payment of Accelerated Benefits will
                reduce the Cash Value and Death Benefit otherwise payable under
                the policy. Receipt of Accelerated Benefits may be a taxable
                event, may affect your eligibility for public assistance
                programs, and may reduce or eliminate other policy and rider
                benefits. Please consult your personal tax advisor to determine
                the tax status of any benefits paid under this rider and with
                social service agencies concerning how receipt of such a payment
                will affect you. Riders are supplemental benefits that can be
                added to a life insurance policy and are not suitable unless you
                also have a need for life insurance. Riders are optional, may
                require additional premium and may not be available in all states
                or on all products. This is not a solicitation of any specific
                insurance policy.
              </p>
              <p>
                The use of cash value life insurance to provide a resource for
                retirement assumes that there is first a need for
                the death benefit protection. The ability of a life insurance
                contract to accumulate sufficient cash value to help meet
                accumulation goals will be dependent upon the amount of extra
                premium paid into the policy, and the performance of the policy,
                and is not guaranteed. Policy loans and withdrawals reduce the
                policy&apos;s cash value and death benefit and may result in a
                taxable event. Surrender charges may reduce the policy&apos;s cash
                value in early years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
