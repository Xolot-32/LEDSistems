import React from 'react';
import { SectionWrapper, SectionTitle, StyledList, StyledListItem } from '../../ui/SectionWrapper';
import { Alert } from '../../ui/Alert';

export const WledFutureDevelopmentSection: React.FC = () => (
    <SectionWrapper title="Desarrollo Futuro y Mejoras" icon="🔮">
        <p>
            El equipo de desarrollo está trabajando activamente para expandir las capacidades de estos controladores. Las siguientes funcionalidades no están presentes en la versión actual del firmware pero están planificadas para futuras actualizaciones.
        </p>

        <SectionTitle>Mejora de Estabilidad de Señal (Level Shifters)</SectionTitle>
        <p>
            Se está evaluando la incorporación de conversores de nivel de 3.3V a 5V para garantizar la máxima integridad de la señal de datos en instalaciones con cableado muy largo o en entornos con alta interferencia electromagnética.
        </p>

        <SectionTitle>Mejoras en el Sistema de Protecciones</SectionTitle>
        <StyledList>
            <StyledListItem>
                <strong>Monitoreo de Corriente por Canal:</strong> Implementación de sensores de corriente individuales para cada canal que permitan monitoreo en tiempo real y alertas preventivas.
            </StyledListItem>
            <StyledListItem>
                <strong>Protecciones Inteligentes:</strong> Sistema de protección que permita el reinicio automático controlado después de resolver fallas temporales.
            </StyledListItem>
             <StyledListItem>
                <strong>Diagnóstico Avanzado:</strong> Herramientas de diagnóstico integradas en la interfaz web para identificar rápidamente problemas en canales específicos.
            </StyledListItem>
        </StyledList>

        <SectionTitle>Funcionalidades Avanzadas en Desarrollo</SectionTitle>
        <StyledList>
             <StyledListItem>
                <strong>Sincronización Avanzada (UDP Sync):</strong> Para shows de luces perfectamente coordinados entre múltiples dispositivos.
            </StyledListItem>
            <StyledListItem>
                <strong>Programación Horaria y Macros Complejas:</strong> Para automatizar secuencias de iluminación basadas en la hora del día o eventos.
            </StyledListItem>
            <StyledListItem>
                <strong>Integración Nativa con Sistemas Domóticos:</strong> Mejoras en la integración con plataformas como Home Assistant, Alexa, etc.
            </StyledListItem>
            <StyledListItem>
                <strong>Expansión de la API de Control Remoto (API REST):</strong> Para permitir un control más profundo desde aplicaciones de terceros.
            </StyledListItem>
        </StyledList>
    </SectionWrapper>
);
