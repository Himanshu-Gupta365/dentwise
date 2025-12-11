import Navbar from '@/components/Navbar'
import ProPlanRequired from '@/components/voice/ProPlanRequired';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils';
import WelcomeSection from './WelcomeSection';
import FeatureCards from './FeatureCards';
import VapiWidget from './VapiWidget';

async function VoicePage() {
    const {has} = await auth();
    const hasProPlan = has({plan:"ai_basic"}) || has({plan:"ai_pro"});

    if (!hasProPlan) return <ProPlanRequired />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <FeatureCards />
      </div>

      <VapiWidget/>

    </div>
  )
}

export default VoicePage
