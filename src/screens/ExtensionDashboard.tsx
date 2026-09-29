import { useState } from 'react';

const assetPathPrefix = "/assets";

type Screen = 'farmer-home' | 'advisory-dashboard' | 'extension-dashboard' | 'registration' | 'sensor-health';
interface Props { setScreen: (s: Screen) => void; }

const farmers = [
  { id: 'KS-001', name: 'Rajesh Kumar Patel', village: 'Wardha', crop: 'Sugarcane', hectares: '42.5 ha', status: 'Active', moisture: '72%', lastVisit: '3 days ago', risk: 'low' },
  { id: 'KS-002', name: 'Sunita Devi Sharma', village: 'Nagpur', crop: 'Cotton', hectares: '28.0 ha', status: 'Needs Inspection', moisture: '28%', lastVisit: '14 days ago', risk: 'critical' },
  { id: 'KS-003', name: 'Prakash Gowda', village: 'Amravati', crop: 'Soybean', hectares: '35.2 ha', status: 'Active', moisture: '64%', lastVisit: '7 days ago', risk: 'low' },
  { id: 'KS-004', name: 'Meena Bai Yadav', village: 'Yavatmal', crop: 'Cotton', hectares: '19.8 ha', status: 'Follow-up', moisture: '44%', lastVisit: '5 days ago', risk: 'warn' },
];

const mapPins = [
  { x: 22, y: 38, label: 'KS-001', color: '#2e7d32' },
  { x: 56, y: 55, label: 'KS-002', color: '#d32f2f' },
  { x: 72, y: 28, label: 'KS-003', color: '#2e7d32' },
  { x: 42, y: 72, label: 'KS-004', color: '#f9a825' },
];

export default function ExtensionDashboard({ setScreen }: Props) {
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortByRisk, setSortByRisk] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState<typeof farmers[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = farmers.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.village.toLowerCase().includes(search.toLowerCase()) ||
    f.crop.toLowerCase().includes(search.toLowerCase())
  ).filter(f => !filterOpen || f.risk !== 'low').sort((a, b) => sortByRisk ? (a.risk === 'critical' ? -1 : b.risk === 'critical' ? 1 : a.risk === 'warn' ? -1 : 1) : 0);

  const openDrawer = (f: typeof farmers[0]) => {
    setSelectedFarmer(f);
    setDrawerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f3f5f0]">
      {/* Top Bar */}
      <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] border-b border-[#e5ebe0] flex items-center justify-between px-[20px] py-[14px] shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-[12px]">
          <div className="bg-[#2e7d32] flex items-center justify-center rounded-[10px] shrink-0 size-[36px]">
            <img alt="" className="block max-w-none" style={{height:'20px',width:'20px'}} src={`${assetPathPrefix}/3b47d.svg`} />
          </div>
          <div>
            <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[18px] tracking-[-0.45px] leading-[27px]">Kisan Sahayak</div>
            <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[12px] leading-[18px]">Extension Officer Portal</div>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="bg-[#e8f5e9] flex gap-[4px] items-center px-[8px] py-[3px] rounded-[9999px]">
            <div className="bg-[#2e7d32] rounded-[9999px] size-[7px]" />
            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#1b5e20] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap leading-[16.5px]">LIVE</span>
          </div>
          <button
            onClick={() => setScreen('registration')}
            className="bg-[#2e7d32] flex items-center gap-[6px] px-[14px] py-[8px] rounded-[10px] active:opacity-90 transition-opacity"
          >
            <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/1bf32.svg`} />
            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-white text-[13px] whitespace-nowrap leading-[19.5px]">Add Farmer</span>
          </button>
          <div className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center justify-center rounded-[9999px] size-[36px]">
            <img alt="" className="block max-w-none" style={{height:'18px',width:'18px'}} src={`${assetPathPrefix}/142fe.svg`} />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-[#e5ebe0] flex items-center gap-[0px] px-[20px] py-[12px] shrink-0">
        {[
          { label: 'Total Farmers', value: '247', icon: `${assetPathPrefix}/f8566.svg` },
          { label: 'Active Fields', value: '189', icon: `${assetPathPrefix}/37db4.svg` },
          { label: 'Alerts Today', value: '12', icon: `${assetPathPrefix}/15793.svg`, alert: true },
          { label: 'Avg Moisture', value: '58.4%', icon: `${assetPathPrefix}/07c01.svg` },
        ].map((stat, i) => (
          <div key={stat.label} className={`flex items-center gap-[10px] flex-1 ${i > 0 ? 'border-l border-[#e5ebe0] pl-[20px]' : ''}`}>
            <div className="bg-[#f1f4ee] flex items-center justify-center rounded-[8px] shrink-0 size-[36px]">
              <img alt="" className="block max-w-none" style={{height:'18px',width:'18px'}} src={stat.icon} />
            </div>
            <div>
              <div className={`font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-[20px] tracking-[-0.5px] leading-[30px] ${stat.alert ? 'text-[#d32f2f]' : 'text-[#191d17]'}`}>{stat.value}</div>
              <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] whitespace-nowrap leading-[16.5px]">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="flex flex-col flex-1 overflow-auto">
          {/* Search & Filter */}
          <div className="bg-white border-b border-[#e5ebe0] flex items-center gap-[10px] px-[20px] py-[12px] shrink-0">
            <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex items-center gap-[8px] px-[12px] py-[9px] rounded-[10px] flex-1 focus-within:border-[#2e7d32] transition-all">
              <img alt="" className="block max-w-none shrink-0" style={{height:'15px',width:'15px'}} src={`${assetPathPrefix}/d35a3.svg`} />
              <input
                className="bg-transparent font-['Hanken_Grotesk:Regular'] font-normal text-[#191d17] text-[13px] flex-1 outline-none leading-[19.5px] placeholder:text-[#a0a99a]"
                placeholder="Search by farmer, village, crop…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button onClick={() => setFilterOpen(value => !value)} aria-pressed={filterOpen} className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center gap-[6px] px-[12px] py-[9px] rounded-[10px] shrink-0">
              <img alt="" className="block max-w-none" style={{height:'15px',width:'15px'}} src={`${assetPathPrefix}/e5615.svg`} />
              <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[13px] whitespace-nowrap leading-[19.5px]">Filter</span>
            </button>
            <button onClick={() => setSortByRisk(value => !value)} aria-pressed={sortByRisk} className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center gap-[6px] px-[12px] py-[9px] rounded-[10px] shrink-0">
              <img alt="" className="block max-w-none" style={{height:'15px',width:'15px'}} src={`${assetPathPrefix}/5dfaf.svg`} />
              <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[13px] whitespace-nowrap leading-[19.5px]">Sort</span>
            </button>
          </div>

          {/* Farmer Table */}
          <div className="flex-1 overflow-auto px-[20px] py-[14px]">
            <div className="bg-white border border-[#e5ebe0] rounded-[16px] overflow-hidden drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              {/* Table Header */}
              <div className="bg-[#f6f8f3] border-b border-[#e5ebe0] flex items-center gap-[0px] px-[16px] py-[10px]">
                {['Farmer ID', 'Name & Village', 'Crop', 'Moisture', 'Status', 'Last Visit', ''].map((h, i) => (
                  <div key={i} className={`font-['Hanken_Grotesk:Bold'] font-bold text-[#4e5748] text-[11px] tracking-[0.55px] uppercase leading-[16.5px] ${i === 0 ? 'w-[80px]' : i === 1 ? 'flex-1' : i === 2 ? 'w-[100px]' : i === 3 ? 'w-[90px]' : i === 4 ? 'w-[130px]' : i === 5 ? 'w-[100px]' : 'w-[80px]'}`}>{h}</div>
                ))}
              </div>
              {/* Rows */}
              {filtered.map((f, idx) => {
                const riskColor = f.risk === 'critical' ? '#d32f2f' : f.risk === 'warn' ? '#f9a825' : '#2e7d32';
                const riskBg = f.risk === 'critical' ? '#ffebee' : f.risk === 'warn' ? '#fff8e1' : '#e8f5e9';
                return (
                  <div
                    key={f.id}
                    onClick={() => openDrawer(f)}
                    className={`flex items-center gap-[0px] px-[16px] py-[14px] cursor-pointer hover:bg-[#f9fbf7] transition-colors ${idx < filtered.length - 1 ? 'border-b border-[#f1f4ee]' : ''}`}
                  >
                    <div className="w-[80px]">
                      <span className="font-['Liberation_Mono:Regular'] text-[#2e7d32] text-[12px] leading-[18px]">{f.id}</span>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[19.5px]">{f.name}</span>
                      <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">{f.village}</span>
                    </div>
                    <div className="w-[100px]">
                      <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[12px] leading-[18px]">{f.crop}</span>
                      <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#73806c] text-[10px] leading-[15px]">{f.hectares}</div>
                    </div>
                    <div className="w-[90px]">
                      <div className="flex items-center gap-[6px]">
                        <div className="bg-[#e5ebe0] h-[6px] rounded-[9999px] w-[40px] overflow-hidden">
                          <div className="h-full rounded-[9999px]" style={{ width: f.moisture, backgroundColor: riskColor }} />
                        </div>
                        <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[11px] leading-[16.5px]" style={{ color: riskColor }}>{f.moisture}</span>
                      </div>
                    </div>
                    <div className="w-[130px]">
                      <div className="inline-flex items-center px-[8px] py-[3px] rounded-[6px]" style={{ backgroundColor: riskBg }}>
                        <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[11px] whitespace-nowrap leading-[16.5px]" style={{ color: riskColor }}>{f.status}</span>
                      </div>
                    </div>
                    <div className="w-[100px]">
                      <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">{f.lastVisit}</span>
                    </div>
                    <div className="w-[80px] flex justify-end">
                      <button className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center gap-[4px] px-[8px] py-[5px] rounded-[6px]">
                        <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#2e7d32] text-[11px] whitespace-nowrap leading-[16.5px]">View</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* GIS Map */}
            <div className="bg-white border border-[#e5ebe0] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] overflow-hidden mt-[14px]">
              <div className="flex items-center justify-between px-[16px] py-[12px] border-b border-[#e5ebe0]">
                <div className="flex items-center gap-[8px]">
                  <div className="bg-[#e8f5e9] flex items-center justify-center rounded-[8px] shrink-0 size-[28px]">
                    <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/da4b1.svg`} />
                  </div>
                  <div>
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[14px] leading-[21px]">GIS Field Map</div>
                    <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">Wardha District • 247 plots</div>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <div className="flex items-center gap-[4px]"><div className="bg-[#2e7d32] rounded-[9999px] size-[8px]" /><span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[10px] leading-[15px]">Healthy</span></div>
                  <div className="flex items-center gap-[4px]"><div className="bg-[#f9a825] rounded-[9999px] size-[8px]" /><span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[10px] leading-[15px]">Watch</span></div>
                  <div className="flex items-center gap-[4px]"><div className="bg-[#d32f2f] rounded-[9999px] size-[8px]" /><span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[10px] leading-[15px]">Critical</span></div>
                </div>
              </div>
              <div className="relative" style={{ height: '280px' }}>
                <img alt="GIS Map" className="block w-full h-full object-cover" src={`${assetPathPrefix}/0d9ba.png`} />
                {mapPins.map(pin => (
                  <button
                    key={pin.label}
                    onClick={() => openDrawer(farmers.find(f => f.id === pin.label) || farmers[0])}
                    className="absolute flex flex-col items-center gap-[2px] -translate-x-1/2 -translate-y-full active:scale-110 transition-transform"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div className="flex items-center justify-center rounded-[9999px] shadow-lg border-2 border-white size-[28px]" style={{ backgroundColor: pin.color }}>
                      <span className="font-['Hanken_Grotesk:Bold'] font-bold text-white text-[8px] leading-[12px]">{pin.label.replace('KS-', '')}</span>
                    </div>
                    <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent" style={{ borderTopColor: pin.color }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Drawer Panel */}
        {drawerOpen && selectedFarmer && (
          <div className="bg-white border-l border-[#e5ebe0] flex flex-col shrink-0 w-[380px] overflow-auto drop-shadow-[-4px_0px_12px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between px-[18px] py-[16px] border-b border-[#e5ebe0] sticky top-0 bg-white z-10">
              <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[16px] leading-[24px]">Farmer Inspection</div>
              <button onClick={() => setDrawerOpen(false)} className="bg-[#f1f4ee] flex items-center justify-center rounded-[8px] size-[30px] active:opacity-70 transition-opacity">
                <img alt="close" className="block max-w-none" style={{height:'12px',width:'12px'}} src={`${assetPathPrefix}/941c7.svg`} />
              </button>
            </div>
            <div className="flex flex-col gap-[16px] p-[18px]">
              {/* Farmer ID Card */}
              <div className="bg-[#f6f8f3] border border-[#e5ebe0] rounded-[12px] p-[14px] flex flex-col gap-[10px]">
                <div className="flex items-center gap-[12px]">
                  <div className="bg-[#2e7d32] flex items-center justify-center rounded-[12px] shrink-0 size-[48px]">
                    <span className="font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-white text-[20px] leading-[30px]">{selectedFarmer.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[16px] leading-[24px]">{selectedFarmer.name}</div>
                    <div className="font-['Liberation_Mono:Regular'] text-[#2e7d32] text-[12px] leading-[18px]">{selectedFarmer.id}</div>
                    <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[12px] leading-[18px]">{selectedFarmer.village} • {selectedFarmer.crop}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[10px]">
                  {[
                    { label: 'Field Size', value: selectedFarmer.hectares },
                    { label: 'Soil Moisture', value: selectedFarmer.moisture },
                    { label: 'Status', value: selectedFarmer.status },
                    { label: 'Last Visit', value: selectedFarmer.lastVisit },
                  ].map(item => (
                    <div key={item.label} className="bg-white border border-[#e5ebe0] rounded-[8px] p-[10px]">
                      <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#73806c] text-[10px] leading-[15px]">{item.label}</div>
                      <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[19.5px]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Advisory */}
              <div className="border-2 border-[rgba(46,125,50,0.4)] rounded-[12px] p-[14px]" style={{ backgroundImage: 'linear-gradient(149.74deg, rgba(232,245,233,0.3) 0%, white 100%)' }}>
                <div className="flex items-center gap-[8px] mb-[10px]">
                  <div className="bg-[#2e7d32] flex items-center justify-center rounded-[8px] shrink-0 size-[28px]">
                    <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/f2531.svg`} />
                  </div>
                  <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[19.5px]">AI Advisory</div>
                </div>
                <p className="font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[12px] leading-[19.2px]">
                  {selectedFarmer.risk === 'critical'
                    ? `Immediate irrigation required. ${selectedFarmer.name}'s field shows critical moisture deficit at ${selectedFarmer.moisture}. Schedule emergency inspection within 24 hours.`
                    : selectedFarmer.risk === 'warn'
                    ? `${selectedFarmer.name}'s field moisture is at ${selectedFarmer.moisture} — approaching warning threshold. Follow-up visit recommended within 5 days.`
                    : `${selectedFarmer.name}'s field is healthy at ${selectedFarmer.moisture} moisture. Next scheduled visit in 14 days.`
                  }
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-[10px]">
                <button
                  onClick={() => setScreen('farmer-home')}
                  className="bg-[#2e7d32] flex items-center justify-center gap-[8px] px-[16px] py-[12px] rounded-[12px] w-full active:opacity-90 transition-opacity shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
                >
                  <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/103d6.svg`} />
                  <span className="font-['Hanken_Grotesk:Bold'] font-bold text-white text-[13px] leading-[19.5px]">Schedule Inspection</span>
                </button>
                <div className="flex gap-[10px]">
                  <button className="flex-1 bg-[#f1f4ee] border border-[#e5ebe0] flex items-center justify-center gap-[6px] px-[12px] py-[10px] rounded-[10px] active:opacity-70 transition-opacity">
                    <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/094d6.svg`} />
                    <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Call Farmer</span>
                  </button>
                  <button className="flex-1 bg-[#f1f4ee] border border-[#e5ebe0] flex items-center justify-center gap-[6px] px-[12px] py-[10px] rounded-[10px] active:opacity-70 transition-opacity">
                    <img alt="" className="block max-w-none" style={{height:'14px',width:'14px'}} src={`${assetPathPrefix}/b78bf.svg`} />
                    <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Send Advisory</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom role switcher */}
      <div className="bg-white border-t border-[#e5ebe0] flex items-center justify-between px-[20px] py-[10px] shrink-0">
        <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[12px] leading-[18px]">Extension Officer View</div>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => setScreen('farmer-home')}
            className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center gap-[6px] px-[12px] py-[7px] rounded-[8px] active:opacity-70 transition-opacity"
          >
            <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Switch to Farmer View</span>
          </button>
          <button
            onClick={() => setScreen('sensor-health')}
            className="bg-[#f1f4ee] border border-[#e5ebe0] flex items-center gap-[6px] px-[12px] py-[7px] rounded-[8px] active:opacity-70 transition-opacity"
          >
            <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#191d17] text-[12px] leading-[18px]">Sensor Health</span>
          </button>
        </div>
      </div>
    </div>
  );
}
