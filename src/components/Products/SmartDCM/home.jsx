import SmartDCMHero from "./SmartDCMHero";
import SmartDCMSpamFree from "./SmartDCMSpamFree";
import SmartDCMCompliance from "./SmartDCMCompliance";
import SmartDCMPlatform from "./SmartDCMPlatform";
import SmartDCMPricing from "./SmartDCMPricing";
import SmartDCMDemo from "./SmartDCMDemo";
import SmartDCMCTA from "./SmartDCMCTA";

export default function SmartDCM() {
  return (
   <div className="bg-[#E6F2F7]">
      <SmartDCMHero />
      <SmartDCMSpamFree />
      <SmartDCMCompliance />
      <SmartDCMPlatform />
      <SmartDCMPricing />
      <SmartDCMDemo />
      <SmartDCMCTA />
    </div>
  );
}
