import { useState } from 'react';
import FarmerHome from './screens/FarmerHome';
import AdvisoryDashboard from './screens/AdvisoryDashboard';
import ExtensionDashboard from './screens/ExtensionDashboard';
import FarmerRegistration from './screens/FarmerRegistration';
import SensorHealth from './screens/SensorHealth';

type Screen = 'farmer-home' | 'advisory-dashboard' | 'extension-dashboard' | 'registration' | 'sensor-health';

const MOBILE_SCREENS: Screen[] = ['farmer-home', 'advisory-dashboard', 'registration', 'sensor-health'];

export default function App() {
  const [screen, setScreen] = useState<Screen>('farmer-home');
  const isMobile = MOBILE_SCREENS.includes(screen);

  return (
    <div className="min-h-screen bg-[#e8ece3] flex flex-col">
      {/* Role switcher nav */}
      <nav className="bg-[#1b5e20] flex items-center justify-between px-[16px] py-[8px] shrink-0">
        <div className="flex items-center gap-[8px]">
          <div className="font-['Hanken_Grotesk:Bold'] font-bold text-white text-[14px] tracking-[-0.35px] leading-[21px]">Kisan Sahayak</div>
          <div className="bg-[rgba(255,255,255,0.15)] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[9999px]">
            <div className="bg-[#a5d6a7] rounded-[9999px] size-[5px]" />
            <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[rgba(255,255,255,0.9)] text-[9px] tracking-[0.45px] uppercase whitespace-nowrap leading-[13.5px]">PROTOTYPE</span>
          </div>
        </div>
        <div className="flex items-center gap-[6px] flex-wrap justify-end">
          {([
            { s: 'farmer-home', label: 'Farmer Home' },
            { s: 'advisory-dashboard', label: 'Advisory' },
            { s: 'extension-dashboard', label: 'Extension Officer' },
            { s: 'registration', label: 'Register' },
            { s: 'sensor-health', label: 'Sensors' },
          ] as { s: Screen; label: string }[]).map(item => (
            <button
              key={item.s}
              onClick={() => setScreen(item.s)}
              className="flex items-center px-[10px] py-[5px] rounded-[7px] transition-all text-[11px] font-['Hanken_Grotesk:SemiBold'] font-semibold whitespace-nowrap leading-[16.5px]"
              style={{
                backgroundColor: screen === item.s ? 'rgba(255,255,255,0.2)' : 'transparent',
                color: screen === item.s ? 'white' : 'rgba(255,255,255,0.65)',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Screen Area */}
      <div className={`flex-1 flex ${isMobile ? 'items-start justify-center' : ''}`}>
        {isMobile ? (
          <div className="w-full max-w-[420px] min-h-[calc(100vh-41px)] relative">
            {screen === 'farmer-home' && <FarmerHome setScreen={setScreen} />}
            {screen === 'advisory-dashboard' && <AdvisoryDashboard setScreen={setScreen} />}
            {screen === 'registration' && <FarmerRegistration setScreen={setScreen} />}
            {screen === 'sensor-health' && <SensorHealth setScreen={setScreen} />}
          </div>
        ) : (
          <div className="w-full">
            {screen === 'extension-dashboard' && <ExtensionDashboard setScreen={setScreen} />}
          </div>
        )}
      </div>
    </div>
  );
}
