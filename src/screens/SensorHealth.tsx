import { useState } from 'react';

const assetPathPrefix = "/assets";

type Screen = 'farmer-home' | 'advisory-dashboard' | 'extension-dashboard' | 'registration' | 'sensor-health';
interface Props { setScreen: (s: Screen) => void; }

const nodes = [
  { id: 'Node 1', loc: 'Zone 1 – North', batt: 87, signal: 4, moisture: '71.2%', temp: '28.4°C', lastSeen: '2m ago', status: 'ok' },
  { id: 'Node 2', loc: 'Zone 2 – Central', batt: 64, signal: 4, moisture: '64.8%', temp: '29.1°C', lastSeen: '5m ago', status: 'ok' },
  { id: 'Node 3', loc: 'Zone 3 – South', batt: 14, signal: 1, moisture: '28.1%', temp: '31.7°C', lastSeen: '47m ago', status: 'critical' },
  { id: 'Node 4', loc: 'Zone 4 – East', batt: 52, signal: 3, moisture: '43.9%', temp: '27.8°C', lastSeen: '8m ago', status: 'ok' },
  { id: 'Node 5', loc: 'Zone 5 – West', batt: 31, signal: 2, moisture: '51.3%', temp: '28.2°C', lastSeen: '19m ago', status: 'warn' },
];

function BattBar({ pct, status }: { pct: number; status: string }) {
  const color = status === 'critical' ? '#d32f2f' : status === 'warn' ? '#f9a825' : '#2e7d32';
  return (
    <div className="flex items-center gap-[6px]">
      <div className="bg-[#e5ebe0] h-[6px] rounded-[9999px] w-[40px] overflow-hidden">
        <div className="h-full rounded-[9999px] transition-all" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[11px] leading-[16.5px]" style={{ color }}>{pct}%</span>
    </div>
  );
}

function SignalDots({ level }: { level: number }) {
  return (
    <div className="flex items-end gap-[2px]">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="w-[3px] rounded-[1px]" style={{ height: `${i * 3 + 3}px`, backgroundColor: i <= level ? '#2e7d32' : '#d1d9cc' }} />
      ))}
    </div>
  );
}

export default function SensorHealth({ setScreen }: Props) {
  const [filter, setFilter] = useState<'all' | 'critical' | 'warning' | 'ok'>('all');
  const [maintenanceReported, setMaintenanceReported] = useState(false);

  const exportReport = () => {
    const rows = nodes.map(node => `${node.id},${node.loc},${node.batt}%,${node.moisture},${node.temp},${node.status}`).join('\n');
    const blob = new Blob([`Node,Location,Battery,Moisture,Temperature,Status\n${rows}`], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kisan-sahayak-sensor-health.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const filtered = nodes.filter(n => {
    if (filter === 'all') return true;
    if (filter === 'critical') return n.status === 'critical';
    if (filter === 'warning') return n.status === 'warn';
    if (filter === 'ok') return n.status === 'ok';
    return true;
  });

  return (
    <div className="flex flex-col items-start relative min-h-screen w-full bg-[#f3f5f0]" data-node-id="1:982">
      {/* Header */}
      <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] border-b border-[#e5ebe0] flex items-center justify-between pb-[11px] pt-[12px] px-[16px] relative shrink-0 w-full sticky top-0 z-10">
        <div className="flex flex-col">
          <div className="flex gap-[8px] items-center mb-[2px]">
            <div className="bg-[#e8f5e9] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[9999px] shrink-0">
              <div className="bg-[#2e7d32] rounded-[9999px] shrink-0 size-[6px]" />
              <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#1b5e20] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap leading-[15px]">TELEMETRY LIVE</div>
            </div>
            <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] whitespace-nowrap leading-[16.5px]">Updated 2m ago</div>
          </div>
          <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[17px] tracking-[-0.425px] leading-[25.5px]">Sensor Node Health</div>
        </div>
        <button onClick={exportReport} className="bg-[#f1f4ee] border border-[#e5ebe0] flex gap-[6px] items-center px-[11px] py-[7px] rounded-[8px] shrink-0">
          <img alt="" className="block max-w-none" style={{height:'13px',width:'13px'}} src={`${assetPathPrefix}/52ab4.svg`} />
          <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[12px] whitespace-nowrap leading-[18px]">Export</span>
        </button>
      </div>

      <div className="flex flex-col gap-[14px] items-start p-[14px] w-full pb-[24px]">
        {/* Gateway Banner */}
        <div className="bg-white border border-[#e5ebe0] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[12px] p-[14px] relative rounded-[14px] w-full">
          <div className="bg-[#e8f5e9] flex items-center justify-center rounded-[12px] shrink-0 size-[44px]">
            <img alt="" className="block max-w-none" style={{height:'22px',width:'22px'}} src={`${assetPathPrefix}/71f80.svg`} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-[8px]">
              <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[14px] leading-[21px]">Gateway GW-001</span>
              <div className="bg-[#e8f5e9] flex gap-[4px] items-center px-[6px] py-[2px] rounded-[9999px]">
                <div className="bg-[#2e7d32] rounded-[9999px] size-[6px]" />
                <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#1b5e20] text-[9px] tracking-[0.45px] uppercase whitespace-nowrap leading-[13.5px]">ONLINE</span>
              </div>
            </div>
            <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">5 nodes registered • 1 critical • LoRaWAN 868 MHz</div>
          </div>
          <div className="flex flex-col items-end gap-[2px]">
            <span className="font-['Hanken_Grotesk:ExtraBold'] font-extrabold text-[#2e7d32] text-[16px] leading-[24px]">4/5</span>
            <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[10px] whitespace-nowrap leading-[15px]">nodes OK</span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-[8px] items-center w-full flex-wrap">
          {(['all', 'critical', 'warning', 'ok'] as const).map(f => {
            const active = filter === f;
            const labels: Record<string, string> = { all: 'All (5)', critical: 'Critical (1)', warning: 'Warning (1)', ok: 'OK (3)' };
            const colors: Record<string, string> = { all: '#2e7d32', critical: '#d32f2f', warning: '#f9a825', ok: '#2e7d32' };
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="flex items-center gap-[5px] px-[12px] py-[6px] rounded-[9999px] border transition-all shrink-0"
                style={{
                  backgroundColor: active ? colors[f] : 'white',
                  borderColor: active ? colors[f] : '#e5ebe0',
                  color: active ? 'white' : '#4e5748'
                }}
              >
                {f === 'critical' && !active && <div className="bg-[#d32f2f] rounded-[9999px] size-[6px]" />}
                {f === 'warning' && !active && <div className="bg-[#f9a825] rounded-[9999px] size-[6px]" />}
                <span className={`font-['Hanken_Grotesk:${active ? 'Bold' : 'SemiBold'}'] font-${active ? 'bold' : 'semibold'} text-[12px] leading-[18px]`}>{labels[f]}</span>
              </button>
            );
          })}
        </div>

        {/* Node Cards */}
        <div className="flex flex-col gap-[10px] w-full">
          {filtered.map(node => {
            const isCritical = node.status === 'critical';
            const isWarn = node.status === 'warn';
            return (
              <div
                key={node.id}
                className="bg-white border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start p-[14px] relative rounded-[14px] w-full"
                style={{
                  borderColor: isCritical ? 'rgba(211,47,47,0.4)' : isWarn ? 'rgba(249,168,37,0.4)' : '#e5ebe0',
                  borderWidth: isCritical ? '2px' : '1px',
                  boxShadow: isCritical ? '0 0 0 1px rgba(211,47,47,0.2)' : undefined
                }}
              >
                <div className="flex items-start justify-between w-full mb-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <div
                      className="flex items-center justify-center rounded-[10px] shrink-0 size-[38px]"
                      style={{ backgroundColor: isCritical ? 'rgba(211,47,47,0.1)' : isWarn ? 'rgba(249,168,37,0.1)' : '#e8f5e9' }}
                    >
                      <img alt="" className="block max-w-none" style={{height:'18px',width:'18px'}} src={`${assetPathPrefix}/a4717.svg`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-[6px]">
                        <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[14px] leading-[21px]">{node.id}</span>
                        {isCritical && (
                          <div className="bg-[#ffebee] border border-[rgba(211,47,47,0.2)] flex items-center px-[6px] py-[1px] rounded-[4px]">
                            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#d32f2f] text-[9px] tracking-[0.45px] uppercase leading-[13.5px]">CRITICAL</span>
                          </div>
                        )}
                        {isWarn && (
                          <div className="bg-[#fff8e1] border border-[rgba(249,168,37,0.3)] flex items-center px-[6px] py-[1px] rounded-[4px]">
                            <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#f57f17] text-[9px] tracking-[0.45px] uppercase leading-[13.5px]">WARN</span>
                          </div>
                        )}
                      </div>
                      <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] leading-[16.5px]">{node.loc}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-[4px]">
                    <SignalDots level={node.signal} />
                    <span className="font-['Hanken_Grotesk:Regular'] font-normal text-[#73806c] text-[10px] leading-[15px]">{node.lastSeen}</span>
                  </div>
                </div>
                <div className="border-t border-[#f1f4ee] flex items-center justify-between pt-[10px] w-full">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#73806c] text-[10px] leading-[15px]">Battery</span>
                    <BattBar pct={node.batt} status={node.status} />
                  </div>
                  <div className="flex flex-col gap-[2px] items-center">
                    <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#73806c] text-[10px] leading-[15px]">Moisture</span>
                    <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[12px] leading-[18px]">{node.moisture}</span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end">
                    <span className="font-['Hanken_Grotesk:Medium'] font-medium text-[#73806c] text-[10px] leading-[15px]">Temp</span>
                    <span className="font-['Hanken_Grotesk:Bold'] font-bold text-[#191d17] text-[12px] leading-[18px]">{node.temp}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* REPORT MAINTENANCE */}
        <button onClick={() => setMaintenanceReported(true)} className="bg-[#d32f2f] flex items-center justify-center gap-[8px] px-[20px] py-[14px] rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-full active:opacity-90 transition-opacity">
          <img alt="" className="block max-w-none" style={{height:'15px',width:'15px'}} src={`${assetPathPrefix}/a97cc.svg`} />
          <span className="font-['Hanken_Grotesk:Bold'] font-bold text-white text-[15px] text-center tracking-[0.225px] whitespace-nowrap leading-[22.5px]">{maintenanceReported ? 'REQUEST SENT' : 'REPORT MAINTENANCE'}</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] border-t border-[#e5ebe0] bottom-0 flex gap-[46px] items-center left-0 right-0 max-w-[420px] mx-auto pb-[6px] pt-[7px] px-[12px] shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.06)] z-50">
        <button onClick={() => setScreen('farmer-home')} className="flex flex-col items-center justify-center px-[16px] py-[4px]">
          <div className="flex h-[28px] items-center justify-center rounded-[9999px] shrink-0 w-[40px]">
            <img alt="" className="block max-w-none" style={{height:'18px',width:'18px'}} src={`${assetPathPrefix}/b3b8a.svg`} />
          </div>
          <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] text-center tracking-[-0.275px] whitespace-nowrap pt-[2px] leading-[16.5px]">Home</div>
        </button>
        <button onClick={() => setScreen('sensor-health')} className="flex flex-col items-center justify-center px-[16px] py-[4px]">
          <div className="bg-[#e8f5e9] flex h-[28px] items-center justify-center rounded-[9999px] shrink-0 w-[40px]">
            <img alt="" className="block max-w-none" style={{height:'18px',width:'18px'}} src={`${assetPathPrefix}/e66b3.svg`} />
          </div>
          <div className="font-['Hanken_Grotesk:Bold'] font-bold text-[#2e7d32] text-[11px] text-center tracking-[-0.275px] whitespace-nowrap pt-[2px] leading-[16.5px]">Sensors</div>
        </button>
        <button onClick={() => setScreen('advisory-dashboard')} className="flex flex-col items-center justify-center px-[16px] py-[4px]">
          <div className="flex h-[28px] items-center justify-center rounded-[9999px] shrink-0 w-[40px]">
            <img alt="" className="block max-w-none" style={{height:'18px',width:'18px'}} src={`${assetPathPrefix}/3537c.svg`} />
          </div>
          <div className="font-['Hanken_Grotesk:Medium'] font-medium text-[#4e5748] text-[11px] text-center tracking-[-0.275px] whitespace-nowrap pt-[2px] leading-[16.5px]">Advisory</div>
        </button>
      </div>
    </div>
  );
}
