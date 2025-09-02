
import React from 'react';
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper';

const Table: React.FC<{ headers: string[]; children: React.ReactNode }> = ({ headers, children }) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600 uppercase tracking-wider">
                <tr>
                    {headers.map((header, i) => <th key={i} className="p-4 font-semibold">{header}</th>)}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {children}
            </tbody>
        </table>
    </div>
);

export const SpecsSection: React.FC = () => (
    <SectionWrapper title="Especificaciones Técnicas" icon="📊">
        <SectionTitle>Especificaciones Generales</SectionTitle>
        <Table headers={["Parámetro", "Especificación"]}>
            <tr><td className="p-4 font-medium">Microcontrolador</td><td className="p-4">ESP32-WROOM-32 (Dual Core 240MHz)</td></tr>
            <tr><td className="p-4 font-medium">Canales de salida</td><td className="p-4">16 canales PWM independientes</td></tr>
            <tr><td className="p-4 font-medium">Resolución PWM</td><td className="p-4">12 bits (4096 niveles)</td></tr>
            <tr><td className="p-4 font-medium">Conectividad</td><td className="p-4">Bluetooth Classic 4.2 + BLE</td></tr>
        </Table>
        <SectionTitle>Especificaciones Eléctricas</SectionTitle>
        <Table headers={["Parámetro", "Valor", "Unidad"]}>
            <tr><td className="p-4 font-medium">Voltaje de entrada</td><td className="p-4">110-220</td><td className="p-4">VAC</td></tr>
            <tr><td className="p-4 font-medium">Voltaje de salida</td><td className="p-4">12</td><td className="p-4">VDC</td></tr>
            <tr><td className="p-4 font-medium">Corriente máx. por canal</td><td className="p-4">3</td><td className="p-4">A</td></tr>
            <tr><td className="p-4 font-medium">Potencia máx. por canal</td><td className="p-4">36</td><td className="p-4">W</td></tr>
        </Table>
    </SectionWrapper>
);
