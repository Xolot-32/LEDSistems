
import React from 'react';
import { SectionWrapper, SectionTitle } from '../../ui/SectionWrapper';

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

export const WledSpecsSection: React.FC = () => (
    <SectionWrapper title="Especificaciones Técnicas" icon="📊">
        <SectionTitle>Controlador de 7 Canales</SectionTitle>
        <Table headers={["Parámetro", "Especificación"]}>
            <tr><td className="p-4 font-medium">Microcontrolador</td><td className="p-4">ESP32-WROOM-32</td></tr>
            <tr><td className="p-4 font-medium">Canales de Datos</td><td className="p-4">7</td></tr>
            <tr><td className="p-4 font-medium">LEDs Máximos por Canal</td><td className="p-4">~800 (recomendado ~500 para rendimiento óptimo)</td></tr>
            <tr><td className="p-4 font-medium">Protección por Canal</td><td className="p-4">Fusibles 3A, 5x20 mm, 250V DC</td></tr>
        </Table>

        <SectionTitle>Controlador de 2 Canales</SectionTitle>
        <Table headers={["Parámetro", "Especificación"]}>
            <tr><td className="p-4 font-medium">Microcontrolador</td><td className="p-4">ESP32-C3</td></tr>
            <tr><td className="p-4 font-medium">Canales de Datos</td><td className="p-4">2</td></tr>
            <tr><td className="p-4 font-medium">LEDs Máximos por Canal</td><td className="p-4">~500 (recomendado ~400 para rendimiento estable)</td></tr>
            <tr><td className="p-4 font-medium">Protección por Canal</td><td className="p-4">Fusibles 5A, 5x20 mm, 250V DC</td></tr>
        </Table>

        <SectionTitle>Especificaciones Eléctricas Generales</SectionTitle>
        <Table headers={["Parámetro", "Especificación"]}>
            <tr><td className="p-4 font-medium">Tensión de Alimentación (Lógica)</td><td className="p-4">5V DC</td></tr>
            <tr><td className="p-4 font-medium">Consumo (Controlador)</td><td className="p-4">~150-200mA</td></tr>
            <tr><td className="p-4 font-medium">Señal de Datos</td><td className="p-4">3.3V Lógica</td></tr>
            <tr><td className="p-4 font-medium">Conectividad</td><td className="p-4">Wi-Fi 2.4 GHz, Bluetooth</td></tr>
        </Table>
        
        <SectionTitle>Condiciones Ambientales</SectionTitle>
        <Table headers={["Parámetro", "Especificación"]}>
            <tr><td className="p-4 font-medium">Temperatura de Operación</td><td className="p-4">0°C a 40°C (para uso en interiores)</td></tr>
            <tr><td className="p-4 font-medium">Humedad Relativa</td><td className="p-4">20% a 90% (sin condensación)</td></tr>
        </Table>
    </SectionWrapper>
);
