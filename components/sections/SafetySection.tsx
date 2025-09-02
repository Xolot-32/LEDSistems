
import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../ui/SectionWrapper';
import { Alert } from '../ui/Alert';

export const SafetySection: React.FC = () => (
    <SectionWrapper title="Medidas de Seguridad" icon="⚠️">
        <Alert type="danger">
            <strong>IMPORTANTE:</strong> El sistema utiliza una fuente de alimentación conmutada externa que convierte voltajes de 110-220V AC a 12V DC. El controlador y los LEDs operan únicamente con voltaje de 12V DC, proporcionando seguridad adicional. La instalación y mantenimiento de la fuente de alimentación deben ser realizados por personal calificado.
        </Alert>
        <SectionTitle>Precauciones Generales</SectionTitle>
        <StyledList>
            <StyledListItem>Desconecte siempre la fuente de alimentación antes de realizar cualquier mantenimiento.</StyledListItem>
            <StyledListItem>El sistema opera con 12V DC, voltaje seguro para manipulación con precauciones básicas.</StyledListItem>
            <StyledListItem>No exceda la capacidad máxima de 3A por canal.</StyledListItem>
            <StyledListItem>Mantenga el sistema alejado de fuentes de humedad.</StyledListItem>
            <StyledListItem>Asegure ventilación adecuada para la fuente de alimentación.</StyledListItem>
        </StyledList>
        <SectionTitle>Protección Contra Sobrecargas</SectionTitle>
        <p>El sistema incluye múltiples niveles de protección:</p>
        <StyledList>
            <StyledListItem><strong>Fusibles individuales:</strong> Cada canal tiene protección independiente de 2A.</StyledListItem>
            <StyledListItem><strong>Protección térmica:</strong> Desconexión automática si la temperatura supera 75°C.</StyledListItem>
            <StyledListItem><strong>Limitación de corriente:</strong> Software limita la corriente máxima por canal.</StyledListItem>
            <StyledListItem><strong>Detección de cortocircuito:</strong> Desconexión inmediata ante cortocircuitos.</StyledListItem>
        </StyledList>
        <Alert type="warning">
            <strong>Advertencia:</strong> Si un fusible se activa repetidamente, revise la instalación antes de reemplazarlo. Podría indicar un problema en el cableado o sobrecarga.
        </Alert>
    </SectionWrapper>
);
