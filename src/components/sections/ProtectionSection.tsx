import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

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

export const ProtectionSection: React.FC = () => (
    <SectionWrapper title="Sistema de Protecciones" icon="🛡️">
        <SectionTitle>Protecciones Eléctricas</SectionTitle>
        <Table headers={["Tipo de Protección", "Valor/Rango", "Acción", "Reinicio"]}>
            <tr>
                <td className="p-4">Fusible por canal</td>
                <td className="p-4">2A</td>
                <td className="p-4">Corte de canal</td>
                <td className="p-4">Manual (reemplazo)</td>
            </tr>
            <tr>
                <td className="p-4">Sobrevoltaje</td>
                <td className="p-4">{'>'}14V DC</td>
                <td className="p-4">Desconexión</td>
                <td className="p-4">Manual</td>
            </tr>
            <tr>
                <td className="p-4">Bajo voltaje</td>
                <td className="p-4">{'<'}10V DC</td>
                <td className="p-4">Modo seguro</td>
                <td className="p-4">Automático</td>
            </tr>
            <tr>
                <td className="p-4">Cortocircuito</td>
                <td className="p-4">Inmediato</td>
                <td className="p-4">Corte de canal</td>
                <td className="p-4">Después de 5 seg</td>
            </tr>
        </Table>

        <SectionTitle>Estado del Sistema</SectionTitle>
        <Alert type="info">
            <strong>Propuesta de Mejora:</strong> Actualmente el sistema no cuenta con LEDs indicadores de estado. Se propone como mejora continua la implementación de indicadores LED para:
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Estado general del sistema (Verde: OK)</li>
                <li>Advertencias (Amarillo: Precaución)</li>
                <li>Errores o protecciones activadas (Rojo: Falla)</li>
                <li>Estado de conexión Bluetooth (Azul: Conectado)</li>
            </ul>
        </Alert>
    </SectionWrapper>
);