import { useState } from 'react';

const assetPathPrefix = "/assets";
const imgContainer = `${assetPathPrefix}/c1a24.svg`;
const imgContainer1 = `${assetPathPrefix}/adffc.svg`;
const imgContainer2 = `${assetPathPrefix}/955f5.svg`;
const imgContainer3 = `${assetPathPrefix}/6f484.svg`;
const imgContainer4 = `${assetPathPrefix}/9d8e1.svg`;
const imgVector = `${assetPathPrefix}/c208d.svg`;
const imgThreshLine = `${assetPathPrefix}/d4ec9.svg`;
const imgThreshBadge = `${assetPathPrefix}/3292f.svg`;
const imgChartArea = `${assetPathPrefix}/bd3d3.svg`;
const imgChartPath = `${assetPathPrefix}/655c8.svg`;
const imgContainer5 = `${assetPathPrefix}/bce9b.svg`;
const imgContainer6 = `${assetPathPrefix}/3d338.svg`;
const imgContainer7 = `${assetPathPrefix}/36676.svg`;
const imgContainer8 = `${assetPathPrefix}/1c3b1.svg`;
const imgContainer9 = `${assetPathPrefix}/4b72d.svg`;
const imgContainer10 = `${assetPathPrefix}/3459f.svg`;
const imgContainer11 = `${assetPathPrefix}/afe35.svg`;
const imgContainer12 = `${assetPathPrefix}/c7a05.svg`;
const imgContainer13 = `${assetPathPrefix}/dfff8.svg`;
const imgContainer14 = `${assetPathPrefix}/7819d.svg`;
const imgContainer15 = `${assetPathPrefix}/f55aa.svg`;
const imgContainer16 = `${assetPathPrefix}/751dc.svg`;
const imgContainer17 = `${assetPathPrefix}/28d36.svg`;

type Screen = 'farmer-home' | 'advisory-dashboard' | 'extension-dashboard' | 'registration' | 'sensor-health';

interface Props { setScreen: (s: Screen) => void; }

export default function AdvisoryDashboard({ setScreen }: Props) {
  const [advisoryExecuted, setAdvisoryExecuted] = useState(false);

  return (
    <div className="flex flex-col items-start relative min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 245, 240) 0%, rgb(243, 245, 240) 100%)" }} data-node-id="1:127">
      <div className="bg-[#f3f5f0] flex flex-col items-start relative shrink-0 w-full">
        <div className="flex flex-col isolate items-start pb-[96px] relative shrink-0 w-full">
          {/* Top Bar */}
          <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] border-[#e5ebe0] border-b flex items-center justify-between pb-[11px] pt-[12px] px-[16px] relative shrink-0 w-full z-[2] sticky top-0">
            <div className="relative shrink-0">
              <div className="flex flex-col items-start pr-[8px] relative">
                <div className="flex gap-[8px] items-center shrink-0 w-full">
                  <div className="bg-[#e8f5e9] flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[9999px] shrink-0">
                    <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[6px]" />
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#1b5e20] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                      <p className="leading-[15px]">TELEMETRY LIVE</p>
                    </div>
                  </div>
                  <div className="flex gap-[1.99px] items-center shrink-0">
                    <div className="relative shrink-0 size-[10.833px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                    </div>
                    <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] whitespace-nowrap">
                      <p className="leading-[16.5px]">Updated 2m ago</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-[4px] pt-[2px]">
                  <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[17px] tracking-[-0.425px] whitespace-nowrap leading-[25.5px]">Advisory Dashboard</span>
                  <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#2e7d32] text-[14px] whitespace-nowrap leading-[21px]">(Advanced)</span>
                </div>
              </div>
            </div>
            <div className="relative shrink-0">
              <div className="bg-[#f1f4ee] border border-[#e5ebe0] flex gap-[6px] items-center px-[11px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer">
                <div className="h-[10.667px] relative shrink-0 w-[10.694px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                </div>
                <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[12px] text-center whitespace-nowrap">
                  <p className="leading-[18px]">Zone: All</p>
                </div>
                <div className="h-[4.933px] relative shrink-0 w-[8px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-[14px] items-start pt-[12px] px-[14px] relative shrink-0 w-full z-[1]">
            {/* Card 1: Soil Moisture Trend */}
            <div className="bg-white border border-[#e5ebe0] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" style={{ minHeight: '307px' }}>
              {/* Header */}
              <div className="absolute flex flex-col items-start left-[14px] pb-[8px] right-[14px] top-[14px]">
                <div className="flex items-center justify-between shrink-0 w-full">
                  <div className="flex gap-[6px] items-center shrink-0">
                    <div className="bg-[rgba(232,245,233,0.8)] flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]">
                      <div className="h-[9.75px] relative shrink-0 w-[15px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[14px] whitespace-nowrap leading-[19.25px]">Soil Moisture Trend (7 days)</div>
                      <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] whitespace-nowrap leading-[16.5px]">Aggregated Root-Zone Sensor Fleet</div>
                    </div>
                  </div>
                  <div className="bg-[#f6f8f3] flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0">
                    <div className="flex gap-[4px] items-center">
                      <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[8px]" />
                      <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#4e5748] text-[10px] whitespace-nowrap">Mean</div>
                    </div>
                    <div className="flex gap-[4px] items-center">
                      <div className="bg-[#d32f2f] border-[#d32f2f] border-b border-dashed h-[2px] relative shrink-0 w-[10px]" />
                      <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#4e5748] text-[10px] whitespace-nowrap">40% Min</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="absolute flex flex-col items-start left-[14px] pb-[12px] right-[14px] top-[57.75px]">
                <div className="bg-[#f1f4ee] flex gap-[4px] items-start p-[4px] relative rounded-[12px] shrink-0 w-full">
                  <div className="bg-white flex flex-col items-center justify-center pl-[25px] pr-[25px] py-[4px] relative rounded-[8px] shrink-0">
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] text-center whitespace-nowrap leading-[16.5px]">Moisture %</div>
                  </div>
                  <div className="flex flex-col items-center justify-center px-[31px] py-[4px] relative rounded-[8px] shrink-0">
                    <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#4e5748] text-[11px] text-center whitespace-nowrap leading-[16.5px]">Temp °C</div>
                  </div>
                  <div className="flex flex-col items-center justify-center px-[20px] py-[4px] relative rounded-[8px] shrink-0">
                    <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#4e5748] text-[11px] text-center whitespace-nowrap leading-[16.5px]">Evapotransp.</div>
                  </div>
                </div>
              </div>
              {/* Chart */}
              <div className="absolute bg-gradient-to-b border border-[rgba(229,235,224,0.5)] flex flex-col from-[rgba(246,248,243,0.4)] items-start left-[14px] overflow-clip p-[5px] right-[14px] rounded-[12px] to-white top-[102.25px]">
                <div className="h-[144px] relative shrink-0 w-full">
                  <div className="relative size-full">
                    <div className="absolute inset-[11.11%_2.94%_88.89%_7.65%]">
                      <div className="absolute inset-[-0.44px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                    <div className="absolute inset-[33.33%_2.94%_66.67%_7.65%]">
                      <div className="absolute inset-[-0.44px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                    <div className="absolute inset-[55.56%_2.94%_44.44%_7.65%]">
                      <div className="absolute inset-[-0.44px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                    <div className="absolute inset-[77.78%_2.94%_22.22%_7.65%]">
                      <div className="absolute inset-[-0.44px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                    {/* Y axis labels */}
                    <div className="absolute font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#73806c] text-[7.2px]" style={{left:'20.84px',top:'12px'}}>80%</div>
                    <div className="absolute font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#73806c] text-[7.2px]" style={{left:'20.84px',top:'44px'}}>60%</div>
                    <div className="absolute font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#73806c] text-[7.2px]" style={{left:'20.84px',top:'76px'}}>40%</div>
                    <div className="absolute font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#73806c] text-[7.2px]" style={{left:'20.84px',top:'108px'}}>20%</div>
                    {/* Threshold */}
                    <div className="absolute inset-[55.56%_2.94%_44.44%_7.65%]">
                      <div className="absolute inset-[-0.66px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgThreshLine} />
                      </div>
                    </div>
                    <div className="absolute inset-[51.39%_3.53%_40.28%_79.41%]">
                      <div className="absolute inset-[-2.91%_-0.64%]">
                        <img alt="" className="block max-w-none size-full" src={imgThreshBadge} />
                      </div>
                    </div>
                    <div className="absolute font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f] text-[6.8px]" style={{left:'283.17px',top:'76px'}}>CRITICAL 40%</div>
                    {/* Chart area and path */}
                    <div className="absolute inset-[26.67%_4.12%_16.67%_11.18%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChartArea} />
                    </div>
                    <div className="absolute inset-[26.67%_4.12%_30%_11.18%]">
                      <div className="absolute inset-[-1.93%_-0.44%_-1.92%_-0.44%]">
                        <img alt="" className="block max-w-none size-full" src={imgChartPath} />
                      </div>
                    </div>
                    {/* X axis labels */}
                    <div className="absolute font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[8px]" style={{left:'35.99px',top:'126.4px'}}>Mon</div>
                    <div className="absolute font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[8px]" style={{left:'81.45px',top:'126.4px'}}>Tue</div>
                    <div className="absolute font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[8px]" style={{left:'126.91px',top:'126.4px'}}>Wed</div>
                    <div className="absolute font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[8px]" style={{left:'172.36px',top:'126.4px'}}>Thu</div>
                    <div className="absolute font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[8px]" style={{left:'217.82px',top:'126.4px'}}>Fri</div>
                    <div className="absolute font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f] text-[8px]" style={{left:'263.28px',top:'126.4px'}}>Sat</div>
                    <div className="absolute font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[8px]" style={{left:'308.74px',top:'126.4px'}}>Sun</div>
                  </div>
                </div>
              </div>
              {/* Summary stat */}
              <div className="absolute flex flex-col items-start left-[14px] pt-[10px] right-[14px] top-[256.25px]">
                <div className="border-[#f1f4ee] border-t flex items-center justify-between pt-[9px] shrink-0 w-full">
                  <div>
                    <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">7-Day Mean: </span>
                    <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[11px] leading-[16.5px]">48.7%</span>
                  </div>
                  <div className="flex gap-[2px] items-center">
                    <div className="relative shrink-0 size-[8.667px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                    </div>
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f] text-[11px] whitespace-nowrap leading-[16.5px]">-14% vs last week</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Zones */}
            <div className="bg-white border border-[#e5ebe0] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start p-[15px] relative rounded-[16px] shrink-0 w-full">
              <div className="border-[#f1f4ee] border-b flex items-center justify-between pb-[9px] shrink-0 w-full mb-[6px]">
                <div className="flex gap-[6px] items-center shrink-0">
                  <div className="bg-[#f1f4ee] flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[13.5px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                    </div>
                  </div>
                  <div>
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[14px] leading-[21px]">Zones</div>
                    <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[10px] leading-[15px]">4 Sectors Monitored</div>
                  </div>
                </div>
                <button className="flex gap-[1.99px] items-center">
                  <div className="relative shrink-0 size-[10.5px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                  <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#1976d2] text-[11px] whitespace-nowrap leading-[16.5px]">Config</div>
                </button>
              </div>
              <div className="flex flex-col gap-[8px] items-start w-full">
                {/* Zone 1 */}
                {[
                  { name: 'Zone 1', sub: 'North Cane', detail: '42.5 ha • Drip Inverted', pct: '72%', color: '#2e7d32', border: '#e5ebe0', textColor: '#2e7d32', bg: '#f6f8f3', icon: imgContainer7 },
                  { name: 'Zone 2', sub: 'Central Pivot', detail: '61.0 ha • Pivot Sprinkler', pct: '65%', color: '#2e7d32', border: '#e5ebe0', textColor: '#2e7d32', bg: '#f6f8f3', icon: imgContainer7 },
                ].map((z) => (
                  <div key={z.name} className="border flex flex-col items-start overflow-clip p-px relative rounded-[12px] shrink-0 w-full" style={{ backgroundColor: z.bg, borderColor: z.border }}>
                    <div className="flex items-center justify-between p-[10px] w-full">
                      <div className="flex gap-[10px] items-center shrink-0">
                        <div className="rounded-[9999px] shrink-0 size-[10px] shadow-[0px_0px_0px_4px_rgba(46,125,50,0.1)]" style={{ backgroundColor: z.color }} />
                        <div className="flex flex-col gap-[6px] items-start pb-[3px]">
                          <div className="flex gap-[6px] items-center"><span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[19.5px]">{z.name}</span><span className="font-['Hanken_Grotesk:Regular'] font-normal text-[#4e5748] text-[10px] leading-[15px]">{z.sub}</span></div>
                          <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#4e5748] text-[10px] leading-[15px]">{z.detail}</div>
                        </div>
                      </div>
                      <div className="flex gap-[8px] items-center">
                        <div className="bg-white border flex gap-[3.99px] items-center px-[9px] py-[3px] rounded-[6px]" style={{ borderColor: z.border }}>
                          <div className="h-[11.667px] relative shrink-0 w-[9.333px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={z.icon} /></div>
                          <span className="font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-[12px] leading-[18px]" style={{ color: z.textColor }}>{z.pct}</span>
                        </div>
                        <div className="h-[5.55px] relative shrink-0 w-[9px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} /></div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Zone 3 - Critical */}
                <div className="border-2 border-[rgba(211,47,47,0.4)] flex flex-col items-start overflow-clip p-px relative rounded-[12px] shrink-0 w-full shadow-[0px_0px_0px_1px_rgba(211,47,47,0.2)]" style={{ backgroundColor: 'rgba(255,235,238,0.2)' }}>
                  <div className="flex items-center justify-between p-[10px] w-full">
                    <div className="flex gap-[10px] items-center shrink-0">
                      <div className="bg-[#d32f2f] rounded-[9999px] shrink-0 size-[10px] shadow-[0px_0px_0px_4px_rgba(211,47,47,0.2)]" />
                      <div className="flex flex-col gap-[6px] items-start pb-[3px]">
                        <div className="flex gap-[6px] items-center">
                          <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[19.5px]">Zone 3</span>
                          <div className="bg-[#ffebee] h-[13.5px] rounded-[4px] px-[4px] flex items-center">
                            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f] text-[9px] tracking-[0.45px] uppercase leading-[13.5px]">DEFICIT</span>
                          </div>
                        </div>
                        <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#4e5748] text-[10px] leading-[15px]">38.2 ha • Micro-jets</div>
                      </div>
                    </div>
                    <div className="flex gap-[8px] items-center">
                      <div className="bg-white border border-[rgba(211,47,47,0.3)] flex gap-[3.99px] items-center px-[9px] py-[3px] rounded-[6px]">
                        <div className="h-[11.083px] relative shrink-0 w-[12.833px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} /></div>
                        <span className="font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-[#d32f2f] text-[12px] leading-[18px]">28%</span>
                      </div>
                      <div className="h-[5.55px] relative shrink-0 w-[9px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} /></div>
                    </div>
                  </div>
                </div>
                {/* Zone 4 */}
                <div className="bg-[#f6f8f3] border border-[#e5ebe0] flex flex-col items-start overflow-clip p-px relative rounded-[12px] shrink-0 w-full">
                  <div className="flex items-center justify-between p-[10px] w-full">
                    <div className="flex gap-[10px] items-center shrink-0">
                      <div className="bg-[#f9a825] rounded-[9999px] shrink-0 size-[10px] shadow-[0px_0px_0px_4px_rgba(249,168,37,0.2)]" />
                      <div className="flex flex-col gap-[6px] items-start pb-[3px]">
                        <div className="flex gap-[6px] items-center"><span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[13px] leading-[19.5px]">Zone 4</span><span className="font-['Hanken_Grotesk:Regular'] font-normal text-[#4e5748] text-[10px] leading-[15px]">East Grove</span></div>
                        <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#4e5748] text-[10px] leading-[15px]">27.8 ha • Surface Furrow</div>
                      </div>
                    </div>
                    <div className="flex gap-[8px] items-center">
                      <div className="bg-white border border-[#e5ebe0] flex gap-[3.99px] items-center px-[9px] py-[3px] rounded-[6px]">
                        <div className="h-[11.667px] relative shrink-0 w-[10.5px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} /></div>
                        <span className="font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-[#f9a825] text-[12px] leading-[18px]">44%</span>
                      </div>
                      <div className="h-[5.55px] relative shrink-0 w-[9px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: AI Recommendation */}
            <div className="border-2 border-[rgba(46,125,50,0.4)] flex flex-col gap-[6px] items-start overflow-clip p-[16px] relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(149.74deg, rgba(232,245,233,0.2) 0%, rgb(255,255,255) 50%, rgb(255,255,255) 100%)" }}>
              <div className="flex items-start justify-between shrink-0 w-full">
                <div className="flex gap-[8px] items-center shrink-0">
                  <div className="bg-[#2e7d32] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[12px] shrink-0 size-[32px]">
                    <div className="relative shrink-0 size-[17.417px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} /></div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start pb-[3px]">
                    <div className="flex gap-[6px] items-center">
                      <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[14px] leading-[14px]">AI Recommendation</span>
                      <div className="bg-[#ffebee] border border-[rgba(211,47,47,0.2)] flex items-center pb-[3.25px] pt-[2px] px-[7px] rounded-[4px]">
                        <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f] text-[9.5px] tracking-[0.475px] uppercase leading-[14.25px]">URGENT</span>
                      </div>
                    </div>
                    <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#2e7d32] text-[10.5px] whitespace-nowrap leading-[15.75px]">Agronomic Engine v4.2 • Evaporative Model</div>
                  </div>
                </div>
                <div className="bg-[#f1f4ee] flex flex-col items-start px-[6px] py-[2px] rounded-[4px]">
                  <div className="font-['Liberation_Mono:Bold'] text-[#4e5748] text-[10px] whitespace-nowrap leading-[15px]">99.4% conf</div>
                </div>
              </div>
              <div className="bg-[rgba(246,248,243,0.7)] border border-[#e5ebe0] relative rounded-[12px] shrink-0 w-full">
                <div className="flex flex-col items-start pb-[11px] pt-[13px] px-[11px]">
                  <p className="font-['Hanken_Grotesk:Medium'] font-medium text-[#191d17] text-[12.5px] leading-[20.31px]">
                    <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f]">Zone 3</span> soil moisture reached critical <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f]">28% deficit</span>. Immediate <span className="font-['Hanken_Grotesk:Bold'] font-bold">45mm irrigation</span> recommended via <span className="font-['Hanken_Grotesk:Bold'] font-bold">Canal Gate B</span> to prevent root wilting.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[4px] shrink-0 w-full">
                <div className="flex gap-[4px] items-center">
                  <div className="relative shrink-0 size-[11.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} /></div>
                  <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] whitespace-nowrap leading-[16.5px]">Est. recovery: 4.5 hrs</div>
                </div>
                <button onClick={() => setAdvisoryExecuted(true)} className="bg-[#2e7d32] flex gap-[5.99px] items-center px-[14px] py-[8px] relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] active:opacity-90 transition-opacity">
                  <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[12px] text-center text-white whitespace-nowrap leading-[18px]">{advisoryExecuted ? 'Advisory Queued' : 'Execute Advisory'}</span>
                  <div className="h-[13.333px] relative shrink-0 w-[10.667px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer14} /></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] border-[#e5ebe0] border-t bottom-0 flex gap-[46px] items-center left-0 right-0 max-w-[420px] mx-auto pb-[6px] pt-[7px] px-[12px] shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.06)] z-50">
        <button onClick={() => setScreen('advisory-dashboard')} className="flex flex-col items-center justify-center px-[16px] py-[4px]">
          <div className="bg-[#e8f5e9] flex h-[28px] items-center justify-center relative rounded-[9999px] shrink-0 w-[40px]">
            <div className="relative shrink-0 size-[15px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer15} /></div>
          </div>
          <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] text-center tracking-[-0.275px] whitespace-nowrap pt-[2px] leading-[16.5px]">Dashboard</div>
        </button>
        <button onClick={() => setScreen('sensor-health')} className="flex flex-col items-center justify-center px-[16px] py-[4px]">
          <div className="flex h-[28px] items-center justify-center relative rounded-[9999px] shrink-0 w-[40px]">
            <div className="h-[16.667px] relative shrink-0 w-[15px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} /></div>
          </div>
          <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] text-center tracking-[-0.275px] whitespace-nowrap pt-[2px] leading-[16.5px]">Reports</div>
        </button>
        <button onClick={() => setScreen('registration')} className="flex flex-col items-center justify-center px-[16px] py-[4px]">
          <div className="flex h-[28px] items-center justify-center relative rounded-[9999px] shrink-0 w-[40px]">
            <div className="h-[16.667px] relative shrink-0 w-[16.75px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer17} /></div>
          </div>
          <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] text-center tracking-[-0.275px] whitespace-nowrap pt-[2px] leading-[16.5px]">Settings</div>
        </button>
      </div>
    </div>
  );
}
