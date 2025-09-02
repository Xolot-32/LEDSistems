import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { FeatureCard, FeatureIcon } from '../../ui/FeatureCard';
import { Alert } from '../../ui/Alert';

export const WledProtectionSection: React.FC = () => (
    <SectionWrapper title="Protecciones y Estabilidad" icon="🛡️">
        <SectionTitle>Protección de la Fuente de Alimentación Conmutada</SectionTitle>
        <p>El sistema utiliza fuentes de alimentación de grado industrial que integran protecciones automáticas contra:</p>
        <StyledList>
            <StyledListItem><strong>Cortocircuito:</strong> La fuente se apaga para proteger el circuito.</StyledListItem>
            <StyledListItem><strong>Sobrecarga:</strong> Limita la corriente de salida si el consumo excede la capacidad nominal.</StyledListItem>
            <StyledListItem><strong>Sobretensión:</strong> Protege contra picos de voltaje.</StyledListItem>
            <StyledListItem><strong>Sobretemperatura:</strong> Protección térmica que apaga la fuente en caso de sobrecalentamiento.</StyledListItem>
        </StyledList>

        <SectionTitle>Sistema de Fusibles por Canal</SectionTitle>
        <p>Cada canal de salida está protegido por <strong>fusibles individuales de vidrio tipo europeo (5x20 mm)</strong> alojados en portafusibles de panel accesibles. Esta configuración ofrece protección selectiva y un reemplazo rápido y sencillo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard title={<><FeatureIcon>7️⃣</FeatureIcon><span>Modelo de 7 Canales</span></>}>
                <p>Utiliza fusibles de <strong>3A</strong> por canal (7 fusibles en total).</p>
            </FeatureCard>
            <FeatureCard title={<><FeatureIcon>2️⃣</FeatureIcon><span>Modelo de 2 Canales</span></>}>
                <p>Utiliza fusibles de <strong>5A</strong> por canal (2 fusibles en total).</p>
            </FeatureCard>
        </div>
        <Alert type="warning">
            <strong>PRECAUCIÓN:</strong> Desconecte siempre el sistema de la alimentación principal antes de reemplazar fusibles.
        </Alert>

        <SectionTitle>Protección de Límite de Corriente del Firmware WLED</SectionTitle>
        <p>WLED incluye una función de seguridad crucial: un <strong>limitador de corriente por software</strong>.</p>
        <Alert type="info">
            <strong>¿Cómo funciona?</strong> En la configuración de WLED ("LED Preferences"), usted debe especificar la corriente máxima que su fuente de alimentación puede suministrar de forma segura. WLED calculará el consumo estimado de los LEDs y limitará automáticamente el brillo para no exceder ese valor. <strong>Es vital configurar este valor correctamente.</strong>
        </Alert>

        <SectionTitle>Recuperación y Conservación de Configuraciones</SectionTitle>
        <p>El controlador guarda periódicamente su estado y todas las configuraciones creadas por el usuario (Presets, Paletas, etc.) de forma persistente en la memoria flash. Si ocurre un corte de energía, el sistema se reiniciará y restaurará automáticamente la última configuración conocida.</p>
    </SectionWrapper>
);