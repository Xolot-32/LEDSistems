import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

export const TroubleshootingSection: React.FC = () => (
    <SectionWrapper title="Solución de Problemas" icon="🔨">
        <SectionTitle>Problemas Comunes y Soluciones</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard title="❌ No enciende ningún LED">
                <ul className="list-disc list-inside space-y-1">
                    <li>Verifique alimentación de 12V DC.</li>
                    <li>Revise conexión de la fuente conmutada.</li>
                    <li>Compruebe fusible principal.</li>
                    <li>Verifique que el ventilador esté girando.</li>
                </ul>
            </FeatureCard>
            <FeatureCard title="📱 No conecta Bluetooth">
                 <ul className="list-disc list-inside space-y-1">
                    <li>Solo el proveedor tiene la app.</li>
                    <li>Verifique que el sistema esté encendido.</li>
                    <li>Reinicie desconectando la alimentación.</li>
                    <li>Contacte al soporte técnico.</li>
                </ul>
            </FeatureCard>
            <FeatureCard title="💡 Un canal no funciona">
                 <ul className="list-disc list-inside space-y-1">
                    <li>Revise fusible del canal (inspección visual).</li>
                    <li>Verifique conexiones del LED.</li>
                    <li>Reemplace fusible si está dañado.</li>
                </ul>
            </FeatureCard>
            <FeatureCard title="⚡ Parpadeo intermitente">
                 <ul className="list-disc list-inside space-y-1">
                    <li>Revise conexiones flojas.</li>
                    <li>Verifique voltaje de la fuente (12V).</li>
                    <li>Posible sobrecarga en el canal.</li>
                    <li>Contacte soporte para diagnóstico.</li>
                </ul>
            </FeatureCard>
        </div>
        <SectionTitle>Cuándo Contactar al Soporte</SectionTitle>
         <p>Contacte inmediatamente al soporte técnico si:</p>
         <StyledList>
            <StyledListItem>El problema persiste después de verificaciones básicas.</StyledListItem>
            <StyledListItem>Se requieren cambios en la programación.</StyledListItem>
            <StyledListItem>Hay comportamientos erráticos no listados.</StyledListItem>
            <StyledListItem>Se requiere actualización o diagnóstico avanzado.</StyledListItem>
         </StyledList>
        <Alert type="info">
            <strong>Soporte Técnico Directo:</strong><br />
            📧 Email: ld.duran.x@gmail.com<br />
            📱 WhatsApp: +52 55 3875 6511<br />
            ⏰ Horario: Lunes a Viernes, 9:00 - 18:00 hrs
        </Alert>
    </SectionWrapper>
);
