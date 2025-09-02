
import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../ui/SectionWrapper';
import { FeatureCard } from '../ui/FeatureCard';
import { Alert } from '../ui/Alert';

export const StartSection: React.FC = () => (
    <SectionWrapper title="Primeros Pasos" icon="🚀">
        <SectionTitle>Componentes del Sistema</SectionTitle>
        <p>El sistema de iluminación LED ya instalado consta de los siguientes componentes:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard title="🎛️ Unidad de Control Principal">
                <p>Controlador basado en ESP32 con 16 canales de salida PWM, alojado en gabinete con ventilación.</p>
            </FeatureCard>
            <FeatureCard title="⚡ Fuente de Alimentación">
                <p>Fuente conmutada de 12V DC de proveedor externo, con protecciones integradas contra sobrecarga y cortocircuito.</p>
            </FeatureCard>
            <FeatureCard title="💡 Tiras LED Instaladas">
                <p>LEDs de 1.5W cada uno, distribuidos en los 16 canales según diseño de iluminación del espacio.</p>
            </FeatureCard>
            <FeatureCard title="🔌 Cableado">
                <p>Cables calibre 20 o 22 AWG según la carga y cantidad de LEDs por canal, con conectores seguros.</p>
            </FeatureCard>
        </div>
        <SectionTitle>Operación del Sistema</SectionTitle>
        <p>El sistema está diseñado para <strong>operación autónoma</strong> y no requiere intervención diaria del personal de mantenimiento. El control se realiza mediante:</p>
        <Alert type="info">
            <strong>Aplicación de Control:</strong> La aplicación móvil desarrollada en Unity NO está disponible en tiendas públicas. Solo el proveedor del sistema cuenta con ella. Para configuraciones o ajustes, contacte al soporte técnico.
        </Alert>
        <SectionTitle>Verificación Inicial</SectionTitle>
        <StyledList ordered>
            <StyledListItem><strong>Verifique alimentación:</strong> Confirme que la fuente de 12V esté conectada y operando.</StyledListItem>
            <StyledListItem><strong>Observe el ventilador:</strong> Debe estar girando cuando el sistema está encendido.</StyledListItem>
            <StyledListItem><strong>Revise las luces:</strong> El sistema restaurará automáticamente la última configuración guardada.</StyledListItem>
            <StyledListItem><strong>Para cambios:</strong> Contacte al soporte técnico para solicitar ajustes en la configuración.</StyledListItem>
        </StyledList>
        <Alert type="warning">
            <strong>Importante:</strong> No intente descargar o buscar la aplicación en tiendas. Para cualquier ajuste o configuración, comuníquese directamente con el proveedor del sistema.
        </Alert>
    </SectionWrapper>
);
