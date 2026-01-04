
import React from 'react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';

const BorgiaCell: React.FC<{ label: string; value: string; unit?: string }> = ({ label, value, unit }) => (
    <div className="border border-thermal/30 p-4 bg-obsidian/40 relative group hover:bg-thermal/5 transition-colors">
        <div className="text-[10px] mono text-thermal font-bold uppercase mb-1 tracking-tighter opacity-70 group-hover:opacity-100">{label}</div>
        <div className="text-xl font-bold text-white mono flex items-baseline gap-2">
            {value}
            {unit && <span className="text-[10px] text-cyan uppercase">{unit}</span>}
        </div>
        <div className="absolute top-1 right-1 w-1 h-1 bg-thermal rounded-full"></div>
    </div>
);

export const SpecsSection: React.FC = () => (
    <SectionWrapper title="Especificaciones Técnicas" icon="📊">
        <div className="mb-10 text-cyan/80 text-sm mono leading-relaxed border-l-2 border-cyan pl-4">
            [DATA_EXTRACTION_SUCCESSFUL]<br/>
            [REFINING_HARDWARE_CONSTANTS]
        </div>

        <SectionTitle>Arquitectura del Procesador</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <BorgiaCell label="Microcontrolador" value="ESP32" unit="WROOM-32" />
            <BorgiaCell label="Core Frequency" value="240" unit="MHz" />
            <BorgiaCell label="Flash Memory" value="4" unit="MB" />
            <BorgiaCell label="Bluetooth" value="4.2" unit="CLASSIC/BLE" />
        </div>

        <SectionTitle>Métricas de Potencia</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <BorgiaCell label="Entrada" value="110-220" unit="VAC" />
            <BorgiaCell label="Salida Lógica" value="12" unit="VDC" />
            <BorgiaCell label="Capacidad Canal" value="3.0" unit="AMPERIOS" />
            <BorgiaCell label="Output PWM" value="12" unit="BITS" />
        </div>

        <div className="mt-12 p-6 bg-techblue/20 border-dashed border-2 border-cyan/20 rounded-lg">
            <h5 className="text-cyan font-bold mono mb-4">NOTAS DE INGENIERÍA:</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
                El sistema utiliza modulación por ancho de pulso (PWM) de alta resolución para evitar el parpadeo perceptible por el ojo humano. La redundancia térmica está integrada en el firmware nivel 0. No exceder los límites de amperaje estipulados por la ley de Joule en el cableado AWG-22.
            </p>
        </div>
    </SectionWrapper>
);
