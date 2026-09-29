import { useState } from 'react';

const assetPathPrefix = "/assets";
const imgContainer = `${assetPathPrefix}/04b5f.svg`;
const imgContainer1 = `${assetPathPrefix}/9087b.svg`;
const imgSvgProgressTrackRing = `${assetPathPrefix}/f0a0f.svg`;
const imgContainer2 = `${assetPathPrefix}/ab8c4.svg`;
const imgContainer3 = `${assetPathPrefix}/ee605.svg`;
const imgContainer4 = `${assetPathPrefix}/5031c.svg`;
const imgContainer5 = `${assetPathPrefix}/53fc0.svg`;
const imgContainer6 = `${assetPathPrefix}/72126.svg`;
const imgContainer7 = `${assetPathPrefix}/06bcd.svg`;
const imgContainer8 = `${assetPathPrefix}/76c9e.svg`;
const imgContainer9 = `${assetPathPrefix}/b71dd.svg`;
const imgContainer10 = `${assetPathPrefix}/25fe1.svg`;
const imgContainer11 = `${assetPathPrefix}/0fdb6.svg`;
const imgContainer12 = `${assetPathPrefix}/0f06a.svg`;
const imgContainer13 = `${assetPathPrefix}/a9e32.svg`;

type Screen = 'farmer-home' | 'advisory-dashboard' | 'extension-dashboard' | 'registration' | 'sensor-health';

interface Props { setScreen: (s: Screen) => void; }

export default function FarmerHome({ setScreen }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col items-start pb-[12px] pt-[16px] px-[17px] relative min-h-screen w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(246, 247, 245) 0%, rgb(246, 247, 245) 100%)", borderLeft: '1px solid #e2e6e0', borderRight: '1px solid #e2e6e0' }} data-node-id="1:2">
      <div className="relative flex-1 w-full flex flex-col justify-between min-h-[calc(100vh-28px)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-[4px] pt-[6px] shrink-0 w-full" data-node-id="1:4">
          <div className="flex gap-[10px] items-center shrink-0">
            <div className="bg-[rgba(46,125,50,0.1)] border border-[rgba(46,125,50,0.2)] flex h-[32px] items-center justify-center p-px rounded-[12px] shrink-0 w-[31.16px]">
              <div className="h-[13.527px] relative shrink-0 w-[13px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
            </div>
            <div className="flex flex-col gap-px items-start shrink-0">
              <div className="flex gap-[6px] items-center shrink-0 w-full">
                <div className="flex flex-col font-['Hanken_Grotesk:Bold'] font-bold text-[#162016] text-[17px] tracking-[-0.425px] whitespace-nowrap">
                  <p className="leading-[17px] mb-0">Farmer</p>
                  <p className="leading-[17px]">Home</p>
                </div>
                <div className="bg-[rgba(46,125,50,0.1)] flex flex-col items-start px-[6px] py-[2px] rounded-[4px] shrink-0">
                  <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#2e7d32] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">SIMPLE</p>
                  </div>
                </div>
              </div>
              <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#6b7280] text-[11px] whitespace-nowrap">
                <p className="leading-[13.75px]">Plot 4B • Sugarcane Block</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[7.99px] items-center shrink-0">
            <div className="bg-white border border-[#e3e8e1] flex gap-[6px] items-center px-[11px] py-[5px] rounded-[9999px] shrink-0">
              <div className="relative shrink-0 size-[8px]">
                <div className="absolute bg-[#2e7d32] inset-0 opacity-75 rounded-[9999px]" />
                <div className="bg-[#2e7d32] relative rounded-[9999px] shrink-0 size-[8px]" />
              </div>
              <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#374151] text-[11px] tracking-[0.275px] uppercase whitespace-nowrap">
                <p className="leading-[16.5px] mb-0">TELEMETRY</p>
                <p className="leading-[16.5px]">LIVE</p>
              </div>
            </div>
            <button className="bg-white border border-[#e3e8e1] flex h-[32px] items-center justify-center p-px rounded-[9999px] shrink-0 w-[31.02px]">
              <div className="h-[14.4px] relative shrink-0 w-[10.8px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
            </button>
          </div>
        </div>

        {/* Gauge Section */}
        <div className="flex flex-1 flex-col isolate items-center justify-center py-[8px] relative w-full" data-node-id="1:27">
          <div className="flex flex-col items-start relative shrink-0 z-[3]">
            <div className="absolute bg-[rgba(46,125,50,0.04)] border border-[rgba(46,125,50,0.2)] inset-[-14px] rounded-[9999px]" />
            <div className="bg-gradient-to-b border border-[#dee8dc] flex from-white items-center justify-center p-[9px] relative rounded-[9999px] shrink-0 size-[192px] to-[#e7efe6] shadow-[0px_12px_30px_-4px_rgba(46,125,50,0.12),0px_4px_12px_-2px_rgba(0,0,0,0.04)]">
              <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                  <div className="relative size-full">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvgProgressTrackRing} />
                  </div>
                </div>
              </div>
              <div className="border border-white flex-1 h-full min-w-px relative rounded-[9999px]">
                <div aria-hidden className="absolute bg-gradient-to-b from-[#f9fcf8] inset-0 pointer-events-none rounded-[9999px] to-[#e9f4e7]" />
                <div className="flex flex-col items-center justify-center p-[17px] relative size-full">
                  <div className="h-[40px] relative shrink-0 w-[36px]">
                    <div className="flex flex-col items-start pb-[4px] relative size-full">
                      <div className="bg-[rgba(46,125,50,0.15)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]">
                        <div className="relative shrink-0 size-[20px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#6b7280] text-[12px] text-center tracking-[1.68px] uppercase whitespace-nowrap">
                    <p className="leading-[18px]">IRRIGATE?</p>
                  </div>
                  <div className="font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-[#2e7d32] text-[52px] text-center tracking-[-1.3px] whitespace-nowrap">
                    <p className="leading-[52px]">NO</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.8)] border border-[rgba(46,125,50,0.2)] flex gap-[5.99px] items-center px-[11px] py-[3px] rounded-[9999px] shrink-0">
                    <div className="h-[9.75px] relative shrink-0 w-[8.125px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                    </div>
                    <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#374151] text-[11px] text-center whitespace-nowrap">
                      <p className="leading-[16.5px]">Moisture: 68%</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(46,125,50,0.15)] blur-[32px] left-[74px] rounded-[9999px] size-[208px] top-[103.53px] z-[2]" />
          <div className="flex flex-col items-start pt-[10px] relative shrink-0 z-[1]">
            <div className="flex gap-[6px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[7.8px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#9ca3af] text-[11px] whitespace-nowrap">
                <p className="leading-[16.5px]">Updated just now • Tap gauge to toggle test</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Card */}
        <div className="bg-white border border-[#e3e8df] flex flex-col gap-[8px] items-start p-[15px] relative rounded-[16px] shrink-0 w-full shadow-[0px_2px_8px_-2px_rgba(16,24,40,0.05),0px_1px_4px_-1px_rgba(16,24,40,0.03)]" data-node-id="1:58">
          <div className="flex items-center justify-between shrink-0 w-full">
            <div className="flex gap-[6px] items-center shrink-0">
              <div className="h-[15.2px] relative shrink-0 w-[14.163px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
              </div>
              <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">AGRONOMIST INSIGHT</p>
              </div>
            </div>
            <div className="bg-[#f9fafb] border border-[#f3f4f6] flex flex-col items-start px-[9px] py-[3px] rounded-[4px] shrink-0">
              <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#9ca3af] text-[11px] whitespace-nowrap">
                <p className="leading-[16.5px]">Zone Alpha</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] items-start shrink-0 w-full">
            <div className="flex flex-col h-[30px] items-start pt-[2px] shrink-0 w-[28px]">
              <div className="bg-[rgba(46,125,50,0.1)] flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px]">
                <div className="h-[14.4px] relative shrink-0 w-[11.7px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pr-[9.5px] shrink-0">
              <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#2c352b] text-[13.5px] whitespace-nowrap">
                <p className="mb-0">
                  <span className="leading-[18.56px]">Field soil moisture is </span>
                  <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold leading-[18.56px] text-[#2e7d32]">optimal at 68%</span>
                  <span className="leading-[18.56px]"> across</span>
                </p>
                <p className="leading-[18.56px] mb-0">your sugarcane plot. Root absorption rate is</p>
                <p>
                  <span className="leading-[18.56px]">normal. Next recommended cycle in </span>
                  <span className="font-['Hanken_Grotesk:SemiBold'] font-semibold leading-[18.56px] text-[#1f2937]">36 hours</span>
                  <span className="leading-[18.56px]">.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-[#f3f4f6] border-t shrink-0 w-full">
            <div className="flex gap-[8px] items-center pt-[5px]">
              <div className="flex gap-[4px] items-center">
                <div className="relative shrink-0 size-[11.7px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                </div>
                <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#374151] text-[11px] whitespace-nowrap">
                  <p className="leading-[16.5px]">31°C Fair</p>
                </div>
              </div>
              <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#d1d5db] text-[11px] whitespace-nowrap">
                <p className="leading-[16.5px]">•</p>
              </div>
              <div className="flex gap-[4px] items-center">
                <div className="h-[9.1px] relative shrink-0 w-[10.4px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                </div>
                <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#6b7280] text-[11px] whitespace-nowrap">
                  <p className="leading-[16.5px]">ET Rate: 4.2mm/d</p>
                </div>
              </div>
              <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#d1d5db] text-[11px] whitespace-nowrap">
                <p className="leading-[16.5px]">•</p>
              </div>
              <div className="font-['Hanken_Grotesk:Regular'] font-normal text-[#9ca3af] text-[11px] whitespace-nowrap ml-auto">
                <p className="leading-[16.5px]">No rain expected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-[10px] items-start shrink-0 w-full mt-[10px]">
          <button onClick={() => setIsPlaying(value => !value)} aria-pressed={isPlaying} className="bg-[#2e7d32] flex gap-[10px] items-center justify-center min-h-[50px] px-[16px] py-[14px] relative rounded-[12px] shrink-0 w-full shadow-[0px_4px_6px_-1px_rgba(46,125,50,0.2),0px_2px_4px_-2px_rgba(46,125,50,0.2)] active:opacity-90 transition-opacity">
            <div className="h-[12.467px] relative shrink-0 w-[9.717px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
            </div>
            <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[14px] text-center text-white tracking-[0.35px] uppercase whitespace-nowrap">
              <p className="leading-[21px]">{isPlaying ? 'PAUSE VOICE ADVISORY' : 'PLAY VOICE ADVISORY'}</p>
            </div>
          </button>
          <a href="tel:+919876543210" className="bg-white border border-[rgba(25,118,210,0.3)] flex gap-[10px] items-center justify-center min-h-[48px] py-[13.88px] px-[17px] relative rounded-[12px] shrink-0 w-full active:opacity-80 transition-opacity">
            <div className="relative shrink-0 size-[14.005px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
            </div>
            <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#1976d2] text-[13.5px] text-center tracking-[0.338px] uppercase whitespace-nowrap">
              <p className="leading-[20.25px]">CALL AGRI OFFICER</p>
            </div>
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border border-[#e3e8df] flex gap-[27px] items-center px-[13px] py-[7px] relative rounded-[16px] shrink-0 w-full mt-[12px] shadow-[0px_2px_8px_-2px_rgba(16,24,40,0.05),0px_1px_4px_-1px_rgba(16,24,40,0.03)]">
          <button onClick={() => setScreen('farmer-home')} className="flex flex-col items-center justify-center px-[16px] py-[4px] relative">
            <div className="bg-[rgba(46,125,50,0.1)] flex items-center justify-center px-[14px] py-[4px] rounded-[9999px] shrink-0">
              <div className="h-[16.962px] relative shrink-0 w-[14.95px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
              </div>
            </div>
            <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] text-center whitespace-nowrap pt-[2px]">
              <p className="leading-[16.5px]">Home</p>
            </div>
          </button>
          <button onClick={() => setScreen('advisory-dashboard')} className="flex flex-col items-center justify-center px-[16px] py-[4px] relative">
            <div className="flex items-center justify-center px-[14px] py-[4px] rounded-[9999px] shrink-0">
              <div className="relative shrink-0 size-[16.962px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} />
              </div>
            </div>
            <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#6b7280] text-[11px] text-center whitespace-nowrap pt-[2px]">
              <p className="leading-[16.5px]">History</p>
            </div>
            <div className="absolute bg-[#2e7d32] right-[13.94px] rounded-[9999px] size-[8px] top-[4px]" />
          </button>
          <button onClick={() => setScreen('sensor-health')} className="flex flex-col items-center justify-center px-[16px] py-[4px] relative">
            <div className="flex items-center justify-center px-[14px] py-[4px] rounded-[9999px] shrink-0">
              <div className="relative shrink-0 size-[18.975px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
              </div>
            </div>
            <div className="font-['Hanken_Grotesk:SemiBold'] font-semibold text-[#6b7280] text-[11px] text-center whitespace-nowrap pt-[2px]">
              <p className="leading-[16.5px]">Help</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
