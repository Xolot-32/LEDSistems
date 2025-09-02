import React from 'react';
import { SectionWrapper, SectionTitle, SubTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';

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

export const WledTroubleshootingSection: React.FC = () => (
    <SectionWrapper title="Solución de Problemas" icon="🔨">
        <SectionTitle>Problemas Relacionados con Protecciones</SectionTitle>
        <Table headers={["Problema", "Posible Causa", "Solución"]}>
            <tr>
                <td className="p-4 font-medium">Un canal específico no funciona</td>
                <td className="p-4">Fusible del canal quemado</td>
                <td className="p-4">Inspeccione visualmente el fusible. Si está quemado, identifique y corrija la causa antes de reemplazarlo.</td>
            </tr>
            <tr>
                <td className="p-4 font-medium">El sistema se apaga completamente</td>
                <td className="p-4">Activación de protección de la fuente por sobrecarga o cortocircuito.</td>
                <td className="p-4">Desconecte todas las cargas, identifique el problema, corríjalo y reconecte gradualmente.</td>
            </tr>
            <tr>
                <td className="p-4 font-medium">Fusibles se queman repetidamente</td>
                <td className="p-4">Sobrecarga en el canal, cortocircuito en el cableado o tira LED defectuosa.</td>
                <td className="p-4">Verifique el cableado, mida la resistencia de las tiras LED y calcule si la carga excede la capacidad del canal.</td>
            </tr>
        </Table>

        <SectionTitle>Problemas Comunes</SectionTitle>
        <StyledList>
            <StyledListItem><strong>LEDs parpadean o colores incorrectos:</strong> Generalmente causado por una fuente de alimentación insuficiente o caída de voltaje. Verifique la fuente y considere la inyección de energía.</StyledListItem>
            <StyledListItem><strong>El controlador no se conecta al Wi-Fi:</strong> Verifique que la contraseña y el nombre de la red sean correctos. Acerque el controlador al router para descartar problemas de señal.</StyledListItem>
            <StyledListItem><strong>Efectos lentos o entrecortados:</strong> Puede ser un síntoma de una mala conexión Wi-Fi o sobrecarga del procesador.</StyledListItem>
        </StyledList>

        <SectionTitle>Reinicio y Recuperación del Sistema</SectionTitle>
        <SubTitle>Reinicio Suave (Ciclo de Energía)</SubTitle>
        <p>Si el sistema no responde, desconecte la fuente de alimentación, espere 10 segundos y vuelva a conectarla. El sistema se reiniciará con su última configuración guardada.</p>
        <SubTitle>Restablecimiento de Fábrica</SubTitle>
        <p>Si el controlador deja de responder o no puede acceder a él, puede realizar un reinicio físico. Para ello, desconecte y vuelva a conectar la alimentación del controlador 4 veces seguidas, esperando unos segundos entre cada ciclo. Esto lo devolverá al modo de Punto de Acceso (WLED-AP).</p>
    </SectionWrapper>
);