import { useState } from 'react';

const assetPathPrefix = "/assets";

type Screen = 'farmer-home' | 'advisory-dashboard' | 'extension-dashboard' | 'registration' | 'sensor-health';
interface Props { setScreen: (s: Screen) => void; }

export default function FarmerRegistration({ setScreen }: Props) {
  const [fullName, setFullName] = useState('Rajesh Kumar Patel');
  const [phone, setPhone] = useState('9876543210');
  const [village, setVillage] = useState('Wardha, Maharashtra');
  const [crop, setCrop] = useState('Sugarcane');
  const [language, setLanguage] = useState('Hindi (हिंदी)');
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitRegistration = () => {
    if (!fullName.trim() || !/^\d{10}$/.test(phone) || !village.trim() || !consent) {
      setError('Enter a valid name, 10-digit phone number, location, and accept the data policy.');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-start relative min-h-screen w-full bg-[#f3f5f0]" data-node-id="1:862">
      {/* Header */}
      <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] border-b border-[#e5ebe0] flex items-center gap-[10px] pb-[11px] pt-[12px] px-[16px] relative shrink-0 w-full sticky top-0 z-10">
        <button
          onClick={() => setScreen('farmer-home')}
          className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center justify-center rounded-[8px] shrink-0 size-[34px] active:opacity-70 transition-opacity"
        >
          <img alt="back" className="block size-[14px] max-w-none" src={`${assetPathPrefix}/02d0b.svg`} />
        </button>
        <div className="flex flex-col flex-1">
          <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[17px] tracking-[-0.425px] leading-[25.5px]">Farmer Registration</div>
          <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">Kisan Sahayak Enrollment</div>
        </div>
        <div className="bg-[#e8f5e9] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[9999px] shrink-0">
          <div className="bg-[#2e7d32] rounded-[9999px] shrink-0 size-[6px]" />
          <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#1b5e20] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap leading-[15px]">LIVE</div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[14px] items-start p-[14px] w-full">
        {/* Progress bar */}
        <div className="flex flex-col gap-[6px] w-full">
          <div className="flex items-center justify-between w-full">
            <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#4e5748] text-[11px] leading-[16.5px]">Step 1 of 2 — Basic Info</span>
            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] leading-[16.5px]">50%</span>
          </div>
          <div className="bg-[#e5ebe0] h-[4px] rounded-[9999px] w-full overflow-hidden">
            <div className="bg-[#2e7d32] h-full w-1/2 rounded-[9999px]" />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-[#e5ebe0] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[18px] items-start p-[16px] relative rounded-[16px] w-full">
          {/* Full Name */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex items-center gap-[6px]">
              <img alt="" className="block size-[14px] max-w-none" src={`${assetPathPrefix}/c97f8.svg`} />
              <label className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Full Name</label>
            </div>
            <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex items-center gap-[8px] px-[12px] py-[11px] rounded-[10px] w-full focus-within:border-[#2e7d32] focus-within:ring-2 focus-within:ring-[rgba(46,125,50,0.15)] transition-all">
              <input
                className="bg-transparent font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[14px] flex-1 outline-none leading-[21px] placeholder:text-[#a0a99a]"
                placeholder="Enter full name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex items-center gap-[6px]">
              <img alt="" className="block size-[14px] max-w-none" src={`${assetPathPrefix}/fedcc.svg`} />
              <label className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Phone Number</label>
            </div>
            <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex items-center rounded-[10px] w-full overflow-hidden focus-within:border-[#2e7d32] focus-within:ring-2 focus-within:ring-[rgba(46,125,50,0.15)] transition-all">
              <div className="bg-[#f1f4ee] border-r border-[#e5ebe0] flex items-center gap-[4px] px-[10px] py-[11px] shrink-0">
                <span className="font-['FreeSans:Regular'] text-[14px] leading-[21px]">🇮🇳</span>
                <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[21px]">+91</span>
                <img alt="" className="block max-w-none" style={{height:'4.93px',width:'8px'}} src={`${assetPathPrefix}/9e542.svg`} />
              </div>
              <input
                className="bg-transparent font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[14px] flex-1 outline-none leading-[21px] px-[12px] py-[11px] placeholder:text-[#a0a99a]"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                type="tel"
                maxLength={10}
              />
            </div>
          </div>

          {/* Village / GPS Location */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex items-center gap-[6px]">
              <img alt="" className="block size-[14px] max-w-none" src={`${assetPathPrefix}/2b990.svg`} />
              <label className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Village / GPS Location</label>
            </div>
            <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex items-center gap-[8px] px-[12px] py-[11px] rounded-[10px] w-full focus-within:border-[#2e7d32] focus-within:ring-2 focus-within:ring-[rgba(46,125,50,0.15)] transition-all">
              <input
                className="bg-transparent font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[14px] flex-1 outline-none leading-[21px] placeholder:text-[#a0a99a]"
                placeholder="Village name or GPS coordinates"
                value={village}
                onChange={e => setVillage(e.target.value)}
              />
              <button className="flex items-center gap-[4px] shrink-0">
                <img alt="" className="block max-w-none" style={{height:'14px',width:'12px'}} src={`${assetPathPrefix}/5c1e6.svg`} />
                <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] whitespace-nowrap leading-[16.5px]">Detect</span>
              </button>
            </div>
          </div>

          {/* Crop Type */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex items-center gap-[6px]">
              <img alt="" className="block size-[14px] max-w-none" src={`${assetPathPrefix}/a28db.svg`} />
              <label className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Crop Type</label>
            </div>
            <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex items-center gap-[8px] px-[12px] py-[11px] rounded-[10px] w-full focus-within:border-[#2e7d32] transition-all">
              <select
                className="bg-transparent font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[14px] flex-1 outline-none leading-[21px] appearance-none cursor-pointer"
                value={crop}
                onChange={e => setCrop(e.target.value)}
              >
                <option>Sugarcane</option>
                <option>Cotton</option>
                <option>Soybean</option>
                <option>Wheat</option>
                <option>Rice</option>
                <option>Maize</option>
              </select>
              <img alt="" className="block max-w-none shrink-0 pointer-events-none" style={{height:'4.93px',width:'8px'}} src={`${assetPathPrefix}/9e542.svg`} />
            </div>
          </div>

          {/* Preferred Language */}
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex items-center gap-[6px]">
              <img alt="" className="block size-[14px] max-w-none" src={`${assetPathPrefix}/81e8a.svg`} />
              <label className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Preferred Language</label>
            </div>
            <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex items-center gap-[8px] px-[12px] py-[11px] rounded-[10px] w-full focus-within:border-[#2e7d32] transition-all">
              <select
                className="bg-transparent font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[14px] flex-1 outline-none leading-[21px] appearance-none cursor-pointer"
                value={language}
                onChange={e => setLanguage(e.target.value)}
              >
                <option>Hindi (हिंदी)</option>
                <option>Marathi (मराठी)</option>
                <option>Telugu (తెలుగు)</option>
                <option>Tamil (தமிழ்)</option>
                <option>Kannada (ಕನ್ನಡ)</option>
                <option>English</option>
              </select>
              <img alt="" className="block max-w-none shrink-0 pointer-events-none" style={{height:'4.93px',width:'8px'}} src={`${assetPathPrefix}/9e542.svg`} />
            </div>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-[10px] w-full">
          <button type="button" onClick={() => setConsent(value => !value)} aria-pressed={consent} className={`${consent ? 'bg-[#2e7d32] border-[#2e7d32]' : 'bg-white border-[#9aa696]'} border flex items-center justify-center rounded-[4px] shrink-0 size-[18px] mt-[1px]`}>
            {consent && <img alt="" className="block size-[10px] max-w-none" src={`${assetPathPrefix}/5c170.svg`} />}
          </button>
          <p className="font-['Hanken_Grotesk:Regular'] font-normal text-[#4e5748] text-[11px] leading-[17.6px]">
            I consent to share farm data with extension officers and AI advisory system under the <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#2e7d32]">Kisan Sahayak Data Policy</span>.
          </p>
        </div>

        {error && <p role="alert" className="text-[#d32f2f] text-[11px] leading-[17px]">{error}</p>}
        {submitted && <p role="status" className="bg-[#e8f5e9] border border-[#a5d6a7] rounded-[10px] px-[12px] py-[9px] text-[#1b5e20] text-[12px] leading-[18px] w-full">Registration saved for {fullName}. Welcome to Kisan Sahayak.</p>}

        {/* Buttons */}
        <div className="flex flex-col gap-[10px] w-full pb-[24px]">
          <button
            onClick={submitRegistration}
            className="bg-[#2e7d32] flex items-center justify-center gap-[8px] px-[20px] py-[14px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-full active:opacity-90 transition-opacity"
          >
            <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/11d91.svg`} />
            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-white text-[15px] text-center tracking-[0.225px] whitespace-nowrap leading-[22.5px]">REGISTER</span>
          </button>
          <button
            onClick={() => setScreen('farmer-home')}
            className="bg-white border-2 border-[#2e7d32] flex items-center justify-center gap-[8px] px-[20px] py-[13px] relative rounded-[14px] w-full active:opacity-70 transition-opacity"
          >
            <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/5d0c2.svg`} />
            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[15px] text-center tracking-[0.225px] whitespace-nowrap leading-[22.5px]">CALL ME TO REGISTER</span>
          </button>
        </div>
      </div>
    </div>
  );
}
