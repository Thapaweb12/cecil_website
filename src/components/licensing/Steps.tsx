import { FC } from "react";

const steps = [
  {
    title: "Step 1: Enroll in LIFE ONLY or LIFE AND HEALTH",
    content: (
      <>
        <p>
          Enroll now at{" "}
          <a
            href="https://partners.xcelsolutions.com/vfavillacorta"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            xcelsolutions.com
          </a>
          .
        </p>
        <ol className="list-decimal pl-4">
          <li>Insurance Pre-Licensing bundle courses.</li>
          <li>Select your state.</li>
          <li>
            Select Licensing education (LIFE Only or LIFE &amp; HEALTH), plus
            Code of Ethics (12 hours for CA).
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Step 2: Complete Your Fingerprinting & Background Check",
    content: (
      <div className="space-y-3">
        <p>
          Before you can receive your life insurance license, most states
          require you to complete a fingerprinting appointment and pass a
          background check. This helps ensure that all licensed insurance
          professionals meet state standards.
        </p>
        <p>
          Schedule your fingerprinting appointment through your state&apos;s
          insurance licensing agency or its approved fingerprinting vendor.
        </p>
        <p>
          Fingerprinting is typically completed by a third-party provider, and
          applicants are responsible for the fee, which generally ranges from
          $35 to $75, depending on the state. Some states also offer
          electronic fingerprinting through approved law enforcement agencies.
        </p>
        <p>
          After your fingerprints are submitted, your background check is
          usually initiated automatically or can be completed online. Aside
          from paying the required fee, there is typically no additional
          action needed from you.
        </p>
        <p>
          Completing this step is an important part of the licensing process
          and must be successfully finished before your life insurance
          license can be issued.
        </p>
      </div>
    ),
  },
  {
    title: "Step 3: Register for State Exam",
    content: (
      <div className="space-y-3">
        <p>
          Visit{" "}
          <a
            href="https://www.psiexams.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            psiexams.com
          </a>{" "}
          and create an account.
        </p>
        <div className="space-y-2">
          <p className="font-semibold">- When registering, please choose:</p>
          <ol className="list-decimal pl-4">
            <li> Government/State Licensing Agency.</li>
            <li>Your State.</li>
            <li>Department of Insurance.</li>
            <li>Life Agent ONLY Exam PSI .</li>
          </ol>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">
            - When it asks for your school/provider, select: XCEL SOLUTIONS LLC
          </p>
          <p>
            Look up test schedules to determine where you want to take yours. If
            you have trouble, contact me! The sooner you schedule your license
            exam, the sooner we are able to get you going, and get you paid!{" "}
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Step 4: Study Exam Crams",
    content: (
      <div className="space-y-3">
        <p>
          These are some additional study guides to support your knowledge base
          for taking the exam. With these study guides, paired with your 32-hour
          training and practice tests, you should be well-equipped to taking
          your license exam!
        </p>
        <div>
          Here is also a{" "}
          <a
            href="https://quizlet.com/263185532/agent-2-exam-flash-cards/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quizlet (flash card online)
          </a>{" "}
          to help you:
        </div>
      </div>
    ),
  },
  {
    title: "Step 5: Apply for License",
    content: (
      <div className="space-y-3">
        <p className="font-semibold">Life agent only or Life and Health.</p>
        <p>
          Visit{" "}
          <a
            href="https://www.sircon.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            sircon.com
          </a>{" "}
          and follow these steps:
        </p>
        <ol className="list-decimal pl-4">
          New insurance license
          <li> Choose ‘resident’ and ‘individual’ then continue</li>
          <li> Enter email and continue</li>
          <li> Enter last name, ssn, applicant</li>
          <li> Choose state you are applying for</li>
          <li>
            Keep processing method at credit card/electronic check submission
          </li>
          <li> License type: resident producer then continue</li>
          <li> Qualification code: Life then continue</li>
          <li> Fill in require field only </li>
          <li> Finish application</li>
        </ol>
        <div className=" space-y-2 font-semibold">
          <p>
            The state will take anywhere from 2-3 weeks to process your
            application. Please check you email for your license.
          </p>
          <p>After licensing move on to getting appointed below.</p>
        </div>
      </div>
    ),
  },
];

const StepCard: FC<{ step: (typeof steps)[0] }> = ({ step }) => (
  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
    <h2 className="text-lg font-bold text-dark-blue  mb-4">{step.title}</h2>
    <div className="text-gray-700 font-medium">{step.content}</div>
  </div>
);

const StepsGrid: FC = () => (
  <div className="min-h-screen bg-gray-100 py-12 px-2 sm:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {steps.map((step, index) => (
        <StepCard key={index} step={step} />
      ))}
    </div>
  </div>
);

export default StepsGrid;
